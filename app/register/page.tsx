"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RegisterPage() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Register Your School</CardTitle>
          <CardDescription>Join our platform to access quality early childhood development resources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 1 ? "bg-purple-600 text-white" : "bg-gray-200"}`}
              >
                1
              </div>
              <div className={`h-1 flex-1 ${step >= 2 ? "bg-purple-600" : "bg-gray-200"}`}></div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 2 ? "bg-purple-600 text-white" : "bg-gray-200"}`}
              >
                2
              </div>
              <div className={`h-1 flex-1 ${step >= 3 ? "bg-purple-600" : "bg-gray-200"}`}></div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 3 ? "bg-purple-600 text-white" : "bg-gray-200"}`}
              >
                3
              </div>
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <span>School Information</span>
              <span>Preferences</span>
              <span>Subscription</span>
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="school-name">School Name</Label>
                  <Input id="school-name" placeholder="Enter school name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="registration-number">Registration Number</Label>
                  <Input id="registration-number" placeholder="School registration number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Physical Address</Label>
                <Input id=
