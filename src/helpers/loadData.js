import { db } from '../firebase/configFirebase';

export const loadData = async (uid) => {
  const res = await db.collection(`${uid}/payrolls/payroll`).get();
  const data = [];

  res.forEach((doc) => {
    const payrollData = doc.data();

    data.push({ id: doc.id, ...payrollData });
  });

  return data;
};
