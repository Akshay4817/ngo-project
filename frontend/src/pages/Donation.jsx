import React from "react";

const Donation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center text-center">
      {/* Hero Section */}
      <section className="w-full py-16 bg-blue-100 text-blue-950">
        <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Your kindness helps us continue providing education, food, and healthcare to those in need.
        </p>
      </section>

      {/* Bank & UPI Details */}
      <section className="py-12 px-6 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-blue-950 mb-8">Donate via Bank or UPI</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center justify-items-center">
          {/* Bank Details */}
          <div className="text-left bg-white shadow-md rounded-2xl p-6 border border-blue-200 w-full">
            <h3 className="text-2xl font-semibold text-blue-950 mb-4">Bank Account Details</h3>
            <ul className="text-gray-700 space-y-2">
              <li><span className="font-semibold">Account Name:</span> Baba Harinath Divyang Seva Trust</li>
              <li><span className="font-semibold">Account Number:</span> 216602000000642</li>
              <li><span className="font-semibold">Bank Name:</span> Indian Overseas Bank</li>
              <li><span className="font-semibold">IFSC Code:</span> IOBA0002166</li>
              <li><span className="font-semibold">Branch:</span> Bhiwadi</li>
            </ul>
          </div>

          {/* QR & UPI */}
          <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 border border-blue-200 w-full">
            <h3 className="text-2xl font-semibold text-blue-950 mb-4">Scan & Pay</h3>
            <img
              src="/images/img8.jpg" // replace this with your actual QR code image path
              alt="NGO QR Code"
              className="w-48 h-48 mb-4 rounded-lg border border-green-300"
            />
            <p className="text-gray-700">
              <span className="font-semibold">UPI ID:</span> QBABHRINTH642@iob
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 bg-blue-100 w-full">
        <h2 className="text-3xl font-semibold text-blue-950 mb-4">Your Impact</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
        Every rupee you contribute helps us educate children, empower women, support people with disabilities, and feed families in need.
          Together, we can make the world a little better — one small act at a time.
        </p>
      </section>
    </div>
  );
};

export default Donation;
