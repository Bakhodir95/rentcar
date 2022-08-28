module.exports = {
  host: "ec2-34-235-31-124.compute-1.amazonaws.com",
  user: "ckxmxurrtqqgsg",
  password: "e16081ab5ad2f61ea12a84455a08729f53981f99cb7e17cc27e2eaafcdff8920",
  dialects: "postgresql",
  db: "dbdrbok8aem7vp",
  Port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
