import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Component/Header";
import TaskModal from "../../Component/TaskModal";

const Root = () => {
  const [viewType, setViewType] = useState("kanban");
  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative font-sans">
      
      <Header 
        viewType={viewType} 
        setViewType={setViewType} 
        onNewTask={() => setIsModalOpen(true)} 
      />
      
      <main className="flex-1 overflow-x-hidden p-6">
        <Outlet context={[viewType, setViewType]} />
      </main>

      <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Root;