'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LayoutDashboard, Package, Receipt, TrendingUp, Users, Plus, LogOut, Lock } from "lucide-react";

interface InventoryItem {
  id: string;
  name: string;
  type: string;
  size: string | null;
  quantity: number;
  cost: number | null;
}

export default function StudioDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [expenses, setExpenses] = useState<unknown[]>([]);
  const [investments, setInvestments] = useState<unknown[]>([]);
  const [customers, setCustomers] = useState<unknown[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'rugly2026') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const fetchData = async () => {
    const [invRes, expRes, invstRes, custRes] = await Promise.all([
      fetch('/api/inventory'),
      fetch('/api/expenses'),
      fetch('/api/investments'),
      fetch('/api/customers')
    ]);
    
    setInventory(await invRes.json());
    setExpenses(await expRes.json());
    setInvestments(await invstRes.json());
    setCustomers(await custRes.json());
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <Card className="w-full max-w-md border-none shadow-2xl">
          <CardHeader className="text-center">
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-black uppercase tracking-tighter">Studio Access</CardTitle>
            <CardDescription>Enter your password to manage Rugly Studio.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-2"
                />
              </div>
              <Button type="submit" className="w-full h-12 font-black tracking-widest">ENTER STUDIO</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar / Nav */}
      <div className="flex h-screen">
        <div className="w-64 bg-slate-950 text-white p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-12">
            <div className="h-8 w-8 bg-primary rounded-sm flex items-center justify-center font-black text-xs">R</div>
            <span className="font-black tracking-widest uppercase">Studio Manager</span>
          </div>
          
          <nav className="space-y-2 flex-1">
            {[
              { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
              { id: 'inventory', icon: Package, label: 'Inventory' },
              { id: 'expenses', icon: Receipt, label: 'Expenses' },
              { id: 'investments', icon: TrendingUp, label: 'Investments' },
              { id: 'customers', icon: Users, label: 'Customers' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeTab === item.id ? 'bg-primary text-white' : 'text-slate-400 hover:bg-white/5'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </button>
            ))}
          </nav>

          <Button 
            variant="ghost" 
            className="text-slate-400 hover:text-white hover:bg-white/5 justify-start gap-3"
            onClick={() => setIsAuthenticated(false)}
          >
            <LogOut className="h-5 w-5" /> Log Out
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-12">
          <header className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tight">{activeTab}</h1>
              <p className="text-slate-500 font-medium">Manage your studio operations and growth.</p>
            </div>
            <Button className="font-black tracking-widest gap-2">
              <Plus className="h-5 w-5" /> ADD NEW
            </Button>
          </header>

          <div className="grid gap-8">
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-8 border-none shadow-lg">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Total Inventory</p>
                  <p className="text-4xl font-black">{inventory.length} Items</p>
                </Card>
                <Card className="p-8 border-none shadow-lg">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Monthly Expenses</p>
                  <p className="text-4xl font-black text-red-500">${expenses.length > 0 ? '...' : '0.00'}</p>
                </Card>
                <Card className="p-8 border-none shadow-lg">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Total Investments</p>
                  <p className="text-4xl font-black text-primary">${investments.length > 0 ? '...' : '0.00'}</p>
                </Card>
              </div>
            )}

            {activeTab === 'inventory' && (
              <Card className="border-none shadow-lg overflow-hidden">
                <Table>
                  <TableHeader className="bg-slate-100">
                    <TableRow>
                      <TableHead className="font-black uppercase text-xs">Name</TableHead>
                      <TableHead className="font-black uppercase text-xs">Type</TableHead>
                      <TableHead className="font-black uppercase text-xs">Size</TableHead>
                      <TableHead className="font-black uppercase text-xs">Qty</TableHead>
                      <TableHead className="font-black uppercase text-xs">Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inventory.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-12 text-slate-400 font-medium">No inventory items found.</TableCell>
                      </TableRow>
                    ) : (
                      inventory.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-bold">{item.name}</TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{item.size}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>${item.cost}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </Card>
            )}

            {activeTab === 'customers' && (
              <Card className="p-12 text-center border-none shadow-lg">
                <p className="text-slate-400 font-medium">{customers.length} customers in database.</p>
              </Card>
            )}

            {activeTab !== 'overview' && activeTab !== 'inventory' && activeTab !== 'customers' && (
              <Card className="p-12 text-center border-none shadow-lg">
                <p className="text-slate-400 font-medium">This section is ready for data integration.</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
