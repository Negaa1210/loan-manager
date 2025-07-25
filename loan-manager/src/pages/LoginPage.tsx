// import React, { useState } from 'react';
// import LabeledInput from '../components/LabeledInput';
// import { FiMoreHorizontal } from 'react-icons/fi';
// import axios from 'axios';

// const LoginPage: React.FC = () => {
//   const [form, setForm] = useState({
//     fullName: '',
//     loanAmount: '',
//     loanTenure: '',
//     employmentStatus: '',
//     reason: '',
//     employmentAddress1: '',
//     employmentAddress2: '',
//   });

//   const handleChange = (field: string) => (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [field]: e.target.value });
//   };

//   // ✅ Submit handler
//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/apply', form);
//       const role = response.data.role;

//       alert(`Application submitted successfully!\nAssigned role: ${role}`);

//       // Optional: store role locally
//       localStorage.setItem('role', role);
//     } catch (err) {
//       console.error(err);
//       alert('Failed to submit application. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
//       <div className="w-full max-w-4xl">
//         <h1 className="text-2xl font-bold mb-10 text-center">APPLY FOR A LOAN</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
//           <LabeledInput
//             label="Full name as it appears on bank account"
//             placeholder="Full name as it appears on bank account"
//             value={form.fullName}
//             onChange={handleChange('fullName')}
//           />

//           {/* Loan Amount */}
//           <div className="flex flex-col gap-1">
//             <label className="text-sm text-gray-900">How much do you need?</label>
//             <input
//               placeholder="How much do you need?"
//               value={form.loanAmount}
//               onChange={handleChange('loanAmount')}
//               className="w-full border border-gray-300 rounded-[7px] px-[15px] py-[10px] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500"
//             />
//           </div>

//           <LabeledInput
//             label="Loan tenure (in months)"
//             placeholder="Loan tenure (in months)"
//             value={form.loanTenure}
//             onChange={handleChange('loanTenure')}
//           />
//           <LabeledInput
//             label="Employment status"
//             placeholder="Employment status"
//             value={form.employmentStatus}
//             onChange={handleChange('employmentStatus')}
//           />

//           {/* Reason for loan */}
//           <div className="flex flex-col gap-1">
//             <label className="text-sm text-gray-900">Reason for loan</label>
//             <textarea
//               placeholder="Reason for loan"
//               value={form.reason}
//               onChange={handleChange('reason')}
//               className="w-full h-[137px] border border-gray-300 rounded-[7px] px-[15px] py-[10px] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 resize-none"
//             />
//           </div>

//           {/* Two Employment Address inputs stacked */}
//           <div className="flex flex-col gap-6">
//             <LabeledInput
//               label="Employment address"
//               placeholder="Employment address"
//               value={form.employmentAddress1}
//               onChange={handleChange('employmentAddress1')}
//             />
//             <LabeledInput
//               label="Employment address"
//               placeholder="Employment address"
//               value={form.employmentAddress2}
//               onChange={handleChange('employmentAddress2')}
//             />
//           </div>
//         </div>

//         {/* Checkboxes */}
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
//           <label className="flex gap-2 items-start">
//             <input type="checkbox" className="mt-1" />
//             I have read the important information and accept that by completing the application, I will be bound by the terms.
//           </label>
//           <label className="flex gap-2 items-start">
//             <input type="checkbox" className="mt-1" />
//             Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies.
//           </label>
//         </div>

//         {/* Submit Button */}
//         <div className="mt-6">
//           <button
//             className="bg-green-900 text-white px-6 py-2 rounded-md"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



















// src/pages/LoginPage.tsx
// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import LabeledInput from '../components/LabeledInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [form, setForm] = useState({
    fullName: '',
    loanAmount: '',
    loanTenure: '',
    employmentStatus: '',
    reason: '',
    employmentAddress1: '',
    employmentAddress2: '',
  });

  const navigate = useNavigate();

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [field]: e.target.value });
  };

  
  const handleSubmit = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/apply', form);
    const { role } = response.data;
    console.log("Login Response:", response.data);

    localStorage.setItem('fullName', form.fullName);
    localStorage.setItem('role', role);

   if (role === 'Admin') {
  navigate('/admin'); // 👈 Routes to Admin.tsx
} else if (role === 'Verifier') {
  navigate('/verifier'); // 👈 Routes to Verifier.tsx
} else if (role === 'User') {
  navigate('/user'); // 👈 Routes to user.tsx
} else {
  alert("Unknown role. Please check your input.");
}



  } catch (err) {
    console.error(err);
    alert('Failed to submit application. Please try again.');
  }
};


  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-10 text-center">APPLY FOR A LOAN</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <LabeledInput
            label="Full name as it appears on bank account"
            placeholder="e.g., Admin John or Verifier Mary"
            value={form.fullName}
            onChange={handleChange('fullName')}
          />

          <LabeledInput
            label="How much do you need?"
            placeholder="Enter amount"
            value={form.loanAmount}
            onChange={handleChange('loanAmount')}
          />

          <LabeledInput
            label="Loan tenure (in months)"
            placeholder="e.g., 12"
            value={form.loanTenure}
            onChange={handleChange('loanTenure')}
          />
          <LabeledInput
            label="Employment status"
            placeholder="e.g., Salaried"
            value={form.employmentStatus}
            onChange={handleChange('employmentStatus')}
          />

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-900">Reason for loan</label>
            <textarea
              placeholder="Reason for loan"
              value={form.reason}
              onChange={handleChange('reason')}
              className="w-full h-[137px] border border-gray-300 rounded-[7px] px-[15px] py-[10px] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 resize-none"
            />
          </div>

          <div className="flex flex-col gap-6">
            <LabeledInput
              label="Employment address (Line 1)"
              placeholder="Address line 1"
              value={form.employmentAddress1}
              onChange={handleChange('employmentAddress1')}
            />
            <LabeledInput
              label="Employment address (Line 2)"
              placeholder="Address line 2"
              value={form.employmentAddress2}
              onChange={handleChange('employmentAddress2')}
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          <label className="flex gap-2 items-start">
            <input type="checkbox" className="mt-1" required />
            I accept the terms and conditions.
          </label>
          <label className="flex gap-2 items-start">
            <input type="checkbox" className="mt-1" required />
            I agree to data sharing for verification purposes.
          </label>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            className="bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-800"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;





















