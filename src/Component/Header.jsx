import React, { useState } from "react";

const Header = ({ viewType, setViewType, onNewTask }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 transition-all">
      <div className="px-4 sm:px-6 py-3 md:py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 text-white rounded flex items-center justify-center font-bold text-xs sm:text-sm">
              Logo
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-800 truncate">
              {viewType === "kanban" ? "Kanban" : "Tasks"}
            </h1>
          </div>
          
          <button 
            className="md:hidden text-gray-600 focus:outline-none p-2 border border-gray-200 rounded hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div className={`${isMobileMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full md:w-auto mt-2 md:mt-0 pb-2 md:pb-0 border-t md:border-0 border-gray-100 pt-3 md:pt-0`}>
          
          <div className="relative w-full md:w-64 order-2 md:order-1">
             <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-800 transition-shadow"
            />
            <span className="absolute left-3 top-2.5 text-gray-400 text-sm">🔍</span>
          </div>

          <select className="order-1 md:order-2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none bg-white">
            <option>Project Alpha</option>
            <option>Project Beta</option>
          </select>

          <div className="order-3 md:order-3 flex bg-gray-100 p-1 rounded-md self-start md:self-auto">
            <button
              onClick={() => { setViewType("kanban"); setIsMobileMenuOpen(false); }}
              className={`flex-1 md:flex-none px-4 md:px-3 py-1.5 text-sm rounded font-medium transition-colors ${
                viewType === "kanban" ? "bg-white text-slate-800 shadow-sm border border-gray-200" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Kanban
            </button>
            <button
              onClick={() => { setViewType("list"); setIsMobileMenuOpen(false); }}
              className={`flex-1 md:flex-none px-4 md:px-3 py-1.5 text-sm rounded font-medium transition-colors ${
                viewType === "list" ? "bg-white text-slate-800 shadow-sm border border-gray-200" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              List
            </button>
          </div>

          <div className="order-4 md:order-4 flex items-center gap-2">
            <button className="flex-1 md:flex-none justify-center flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 bg-white">
               Filter
            </button>

            <button 
              onClick={() => { onNewTask(); setIsMobileMenuOpen(false); }}
              className="flex-1 md:flex-none bg-slate-900 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-slate-800 shadow-sm whitespace-nowrap"
            >
              New Task
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;