import * as React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="p-6 space-y-6">
      <Card>
        <CardContent className="p-6 text-center">
          <h1 className="text-3xl font-bold">مرحباً بك في نظام كيان</h1>
          <p className="mt-2 text-muted-foreground">نظام إدارة مالية متكامل</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Button className="text-lg py-6" onClick={() => navigate("/invoices")}>📦 الفواتير</Button>
        <Button className="text-lg py-6" onClick={() => navigate("/clients")}>👥 العملاء</Button>
        <Button className="text-lg py-6" onClick={() => navigate("/suppliers")}>🏬 الموردين</Button>
        <Button className="text-lg py-6" onClick={() => navigate("/expenses")}>💸 المصروفات الشخصية</Button>
        <Button className="text-lg py-6" onClick={() => navigate("/reports")}>📊 التقارير</Button>
        <Button className="text-lg py-6" onClick={() => navigate("/create-invoice")}>📝 إنشاء فاتورة</Button>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
