import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CondoRentApplication() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    employmentStatus: "",
    monthlyIncome: "",
    previousAddress: "",
    rentalHistory: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted!");
  };

  return (
    <Card className="max-w-lg mx-auto mt-10 p-5 shadow-lg">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Condo Rental Application</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
          <Input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <Input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
          <Input type="text" name="employmentStatus" placeholder="Employment Status" required onChange={handleChange} />
          <Input type="number" name="monthlyIncome" placeholder="Monthly Income" required onChange={handleChange} />
          <Input type="text" name="previousAddress" placeholder="Previous Address" required onChange={handleChange} />
          <textarea name="rentalHistory" placeholder="Rental History" required className="w-full border p-2 rounded" onChange={handleChange}></textarea>
          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </CardContent>
    </Card>
  );
}
