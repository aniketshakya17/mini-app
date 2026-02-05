module.exports = {
  apps: [
    {
      name: "mini-backend",
      script: "index.js",
      cwd: "/home/ubuntu/mini-app/backend",
      env: {
        PORT: 5000,
        DATABASE_URL: "postgres://postgres:12345@localhost:5432/Test",
        JWT_SECRET: "super_secure_random_string",
      },
    },
  ],
};
