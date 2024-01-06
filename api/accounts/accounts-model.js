const db = require("../../data/db-config");

const getAll = async () => {
  // DO YOUR MAGIC
  return await db("accounts");
};

const getById = (id) => {
  // DO YOUR MAGIC
  //select * from accounts where id = 1
  return db("accounts").where("id", id).first();
};

const create = async (account) => {
  // DO YOUR MAGIC
  //insert into accounts (name, budget) values ('foo', 1000)
  const [id] = await db("accounts").insert(account);
  return getById(id);
};

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  // update accounts set name = 'foo', budget = 1000 where id = id
  await db("accounts").where("id", id).update(account);
  return getById(id);
};

const deleteById = (id) => {
  // delete from accounts where id = id
  return db("accounts").where("id", id).del();
  //this returns the num of records deleted
  //but thanks to our middleware, we have a req.account
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};