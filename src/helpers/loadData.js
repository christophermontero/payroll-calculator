import { db } from '../firebase/configFirebase';

export const loadData = async (uid) => {
  const res = await db.collection(`${uid}/payrolls/payroll`).get();
  const data = [];

  res.forEach((payroll) => {
    const payrollData = payroll.data();

    data.push({ id: payrollData.id, ...payrollData });
  });

  return data;
};
