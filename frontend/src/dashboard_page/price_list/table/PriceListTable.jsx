import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./PriceListTable.css";
import PriceListRow from "./PriceListRow";

const API_BASE = "/api/pricelist";
const AUTOSAVE_DELAY = 1000;
const ROW_LIMIT = 20;
const DRAFT_KEY = "pricelist_draft";

const EMPTY_ROW = {
  id: null,
  articleNo: "",
  productService: "",
  inPrice: "",
  price: "",
  unit: "",
  inStock: "",
  description: "",
};

const PriceListTable = forwardRef(function PriceListTable(_, ref) {
  const [rows, setRows] = useState([]);
  const [saving, setSaving] = useState(false);
  const [activeRowIndex, setActiveRowIndex] = useState(null);

  const autosaveTimer = useRef(null);
  const initialLoad = useRef(true);

  useEffect(() => {
    const loadPrices = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch(API_BASE, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error();

        const backendData = await res.json();
        const draft = JSON.parse(localStorage.getItem(DRAFT_KEY));

        const baseRows =
          Array.isArray(draft) && draft.length ? draft : backendData;

        const filledRows = [
          ...baseRows,
          ...Array.from(
            { length: Math.max(0, ROW_LIMIT - baseRows.length) },
            () => ({ ...EMPTY_ROW })
          ),
        ];

        setRows(filledRows);
      } catch {
        setRows(
          Array.from({ length: ROW_LIMIT }, () => ({ ...EMPTY_ROW }))
        );
      }
    };

    loadPrices();
  }, []);

  const handleChange = (index, field, value) => {
    setRows((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      localStorage.setItem(DRAFT_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    if (!rows.length) return;

    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) return;

    clearTimeout(autosaveTimer.current);

    autosaveTimer.current = setTimeout(async () => {
      setSaving(true);

      try {
        const updatedRows = [...rows];

        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];
          if (!row.articleNo && !row.productService) continue;

          const res = await fetch(
            row.id ? `${API_BASE}/${row.id}` : API_BASE,
            {
              method: row.id ? "PUT" : "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(row),
            }
          );

          if (!res.ok) continue;

          const saved = await res.json();
          if (!row.id && saved?.id) updatedRows[i] = saved;
        }

        setRows(updatedRows);
        localStorage.removeItem(DRAFT_KEY);
      } finally {
        setSaving(false);
      }
    }, AUTOSAVE_DELAY);

    return () => clearTimeout(autosaveTimer.current);
  }, [rows]);

  useImperativeHandle(ref, () => ({
    saving,
  }));

  return (
    <div className="price-table-wrapper">
      <div className="price-table">
        {rows.map((row, index) => (
          <PriceListRow
            key={row.id ?? index}
            row={row}
            isActive={activeRowIndex === index}
            onClick={() => setActiveRowIndex(index)}
            onChange={(field, value) =>
              handleChange(index, field, value)
            }
          />
        ))}
      </div>
    </div>
  );
});

export default PriceListTable;
