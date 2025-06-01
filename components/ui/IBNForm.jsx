
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function IBNForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    surName: "",
    sex: "",
    dateOfBirth: "",
    bvn: "",
    nin: "",
    mobile: "",
    stateOrigin: "",
    lga: "",
    accountNumber: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["bvn", "nin", "mobile"].includes(name) && value.length > 11) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSexChange = (e) => {
    setFormData({ ...formData, sex: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add validation or API submission here
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <Card className="bg-gradient-to-br from-sky-100 via-white to-sky-50 shadow-2xl rounded-2xl">
        <CardContent className="p-8">
          <h2 className="text-4xl font-bold mb-8 text-sky-800 text-center">IBN Advanced Bio Data Form</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName" className="text-sky-700 font-medium">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 border border-sky-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div>
              <Label htmlFor="surName" className="text-sky-700 font-medium">Surname</Label>
              <Input
                id="surName"
                name="surName"
                value={formData.surName}
                onChange={handleChange}
                required
                className="mt-1 border border-sky-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div className="col-span-2">
              <Label className="text-sky-700 font-medium">Sex</Label>
              <div className="flex items-center gap-6 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="sex"
                    value="Male"
                    checked={formData.sex === "Male"}
                    onChange={handleSexChange}
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="sex"
                    value="Female"
                    checked={formData.sex === "Female"}
                    onChange={handleSexChange}
                  />
                  <span>Female</span>
                </label>
              </div>
            </div>

            <div>
              <Label htmlFor="dateOfBirth" className="text-sky-700 font-medium">Date of Birth</Label>
              <Input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="mt-1 border border-sky-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div>
              <Label htmlFor="bvn" className="text-sky-700 font-medium">BVN Number</Label>
              <Input
                id="bvn"
                name="bvn"
                value={formData.bvn}
                onChange={handleChange}
                required
                maxLength={11}
                className="mt-1 border border-sky-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div>
              <Label htmlFor="nin" className="text-sky-700 font-medium">NIN Number</Label>
              <Input
                id="nin"
                name="nin"
                value={formData.nin}
                onChange={handleChange}
                required
                maxLength={11}
                className="mt-1 border border-sky-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div>
              <Label htmlFor="mobile" className="text-sky-700 font-medium">Mobile Number</Label>
              <Input
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                maxLength={11}
                className="mt-1 border border-sky-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div>
              <Label htmlFor="stateOrigin" className="text-sky-700 font-medium">State of Origin</Label>
              <Input
                id="stateOrigin"
                name="stateOrigin"
                value={formData.stateOrigin}
                onChange={handleChange}
                required
                className="mt-1 border border-sky-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div>
              <Label htmlFor="lga" className="text-sky-700 font-medium">LGA</Label>
              <Input
                id="lga"
                name="lga"
                value={formData.lga}
                onChange={handleChange}
                required
                className="mt-1 border border-sky-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="accountNumber" className="text-sky-700 font-medium">Account Number (optional)</Label>
              <Input
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="mt-1 border border-sky-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div className="col-span-2">
              <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-xl text-lg transition-all duration-200">Submit</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
