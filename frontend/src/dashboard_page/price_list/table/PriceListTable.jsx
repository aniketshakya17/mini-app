import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./PriceListTable.css";
import PriceListRow from "./PriceListRow";

const emptyRow = {
  id: null,
  articleNo: "",
  productService: "",
  inPrice: "",
  price: "",
  unit: "",
  inStock: "",
  description: "",
};

const PriceListTable = forwardRef(function PriceListTable(props, ref) {
  const [rows, setRows] = useState(
    Array.from({ length: 20 }, () => ({ ...emptyRow })),
  );
  const [saving, setSaving] = useState(false);
  const [activeRowIndex, setActiveRowIndex] = useState(null);

  const handleChange = (index, field, value) => {
    setRows((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const saveAll = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Not authenticated");
      return;
    }

    setSaving(true);

    try {
      for (const row of rows) {
        if (!row.articleNo && !row.productService) continue;

        await fetch(row.id ? `/api/pricelist/${row.id}` : `/api/pricelist`, {
          method: row.id ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(row),
        });
      }

      alert("Price list saved successfully");
    } catch (err) {
      console.error("Save failed:", err);
      alert("Failed to save price list");
    } finally {
      setSaving(false);
    }
  };

  useImperativeHandle(ref, () => ({
    saveAll,
    saving,
  }));

  return (
    <div className="price-table-wrapper">
      <div className="price-table">
        {rows.map((row, index) => (
          <PriceListRow
            key={index}
            row={row}
            isActive={activeRowIndex === index}
            onClick={() => setActiveRowIndex(index)}
            onChange={(field, value) => handleChange(index, field, value)}
          />
        ))}
      </div>
    </div>
  );
});

export default PriceListTable;
