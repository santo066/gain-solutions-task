// import React from "react";

// const TaskModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex justify-end">
//       <div 
//         className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity" 
//         onClick={onClose}
//       ></div>
//       <div className="relative w-full md:max-w-[600px] h-full bg-white shadow-2xl flex flex-col animate-slide-in transform transition-transform">
        
//         <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
//           <h2 className="text-lg font-bold text-slate-800">Task Details</h2>
//           <button onClick={onClose} className="p-2 -mr-2 text-gray-400 hover:text-slate-800 hover:bg-gray-100 rounded-full transition-all">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 sm:space-y-8 bg-white scrollbar-thin">
          
//           <div className="space-y-2">
//             <label className="text-xs uppercase font-bold text-gray-500 tracking-wide">Task Title</label>
//             <input 
//               type="text" 
//               defaultValue="Design homepage wireframe"
//               className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 font-medium focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-all shadow-sm"
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
//             <div className="space-y-2">
//               <label className="text-xs uppercase font-bold text-gray-500 tracking-wide">Status</label>
//               <select className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-slate-800 shadow-sm">
//                 <option>Backlog</option>
//                 <option>In Progress</option>
//                 <option>Review</option>
//                 <option>Done</option>
//               </select>
//             </div>
//             <div className="space-y-2">
//               <label className="text-xs uppercase font-bold text-gray-500 tracking-wide">Priority</label>
//               <select className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-slate-800 shadow-sm">
//                 <option>High</option>
//                 <option>Medium</option>
//                 <option>Low</option>
//               </select>
//             </div>
//              <div className="space-y-2">
//               <label className="text-xs uppercase font-bold text-gray-500 tracking-wide">Assignee</label>
//               <select className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-slate-800 shadow-sm">
//                 <option>John Doe</option>
//                 <option>Jane Smith</option>
//               </select>
//             </div>
//             <div className="space-y-2">
//               <label className="text-xs uppercase font-bold text-gray-500 tracking-wide">Due Date</label>
//               <input 
//                 type="date" 
//                 defaultValue="2025-12-15"
//                 className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-500 bg-white focus:outline-none focus:border-slate-800 shadow-sm"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-xs uppercase font-bold text-gray-500 tracking-wide">Details</label>
//             <textarea 
//               rows="4"
//               defaultValue="Create initial wireframe designs for the new homepage layout."
//               className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 leading-relaxed focus:outline-none focus:border-slate-800 shadow-sm resize-none"
//             ></textarea>
//           </div>

//           <div className="space-y-4 pt-2 border-t border-gray-50">
//             <h3 className="text-sm font-bold text-gray-800">Comments</h3>
//             <div className="space-y-4">
//               <div className="flex gap-3">
//                  <img src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff" alt="John" className="w-8 h-8 rounded-full shadow-sm mt-1"/>
//                  <div className="bg-gray-50 rounded-lg p-3 w-full border border-gray-100">
//                     <div className="flex justify-between items-center mb-1">
//                        <span className="font-bold text-xs sm:text-sm text-gray-900">John Doe</span>
//                        <span className="text-[10px] sm:text-xs text-gray-400">2025-12-08</span>
//                     </div>
//                     <p className="text-sm text-gray-600">Looking good! Just a few minor suggestions.</p>
//                  </div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2">
//               <input 
//                 type="text" 
//                 placeholder="Write a comment..." 
//                 className="flex-1 border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 shadow-sm"
//               />
//               <button className="bg-slate-900 text-white text-sm font-bold px-5 py-2.5 rounded shadow hover:bg-slate-800 active:scale-95 transition-all">
//                 Send
//               </button>
//             </div>
//           </div>

//           <div className="pt-4">
//              <h3 className="text-sm font-bold text-gray-800 mb-3">Activity</h3>
//              <ul className="text-xs sm:text-sm text-gray-500 space-y-3 pl-2 border-l-2 border-gray-100">
//                 <li className="pl-4 relative">
//                   <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300"></span>
//                   <span className="font-semibold text-gray-900">John Doe</span> changed status to In Progress
//                   <div className="text-[10px] text-gray-400 mt-0.5">Today at 10:30 AM</div>
//                 </li>
//                  <li className="pl-4 relative">
//                   <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300"></span>
//                   <span className="font-semibold text-gray-900">Sarah Wilson</span> created task
//                   <div className="text-[10px] text-gray-400 mt-0.5">Yesterday at 5:00 PM</div>
//                 </li>
//              </ul>
//           </div>

//         </div>

//         <div className="p-4 sm:p-5 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 sticky bottom-0">
//           <button 
//             onClick={onClose}
//             className="flex-1 sm:flex-none px-6 py-2.5 border border-gray-300 bg-white rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
//           >
//             Cancel
//           </button>
//           <button 
//              onClick={onClose}
//              className="flex-1 sm:flex-none px-6 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 shadow-md active:scale-95 transition-all"
//           >
//             Save
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TaskModal;


import React from "react";

const TaskModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    
    const formData = new FormData(e.currentTarget);
    
    const data = Object.fromEntries(formData.entries());
    
    console.log("Collected Form Data:", data);
    
    onClose(); 
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity" 
        onClick={onClose}
      ></div>
      
      <form 
        onSubmit={handleSubmit}
        className="relative w-full md:max-w-[600px] h-full bg-white shadow-2xl flex flex-col animate-slide-in transform transition-transform"
      >
        
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
          <h2 className="text-lg font-bold text-slate-800">Task Details</h2>
          <button 
            type="button" 
            onClick={onClose} 
            className="p-2 -mr-2 text-gray-400 hover:text-slate-800 hover:bg-gray-100 rounded-full transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 sm:space-y-8 bg-white scrollbar-thin">
          
          <div className="space-y-2">
            <label htmlFor="title" className="text-xs uppercase font-bold text-gray-500 tracking-wide">Task Title</label>
            <input 
              id="title"
              name="title"
              type="text" 
              defaultValue="Design homepage wireframe"
              className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 font-medium focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 transition-all shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="space-y-2">
              <label htmlFor="status" className="text-xs uppercase font-bold text-gray-500 tracking-wide">Status</label>
              <select 
                id="status"
                name="status" 
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-slate-800 shadow-sm"
              >
                <option value="Backlog">Backlog</option>
                <option value="In Progress">In Progress</option>
                <option value="Review">Review</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="priority" className="text-xs uppercase font-bold text-gray-500 tracking-wide">Priority</label>
              <select 
                id="priority"
                name="priority"
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-slate-800 shadow-sm"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
             <div className="space-y-2">
              <label htmlFor="assignee" className="text-xs uppercase font-bold text-gray-500 tracking-wide">Assignee</label>
              <select 
                id="assignee"
                name="assignee"
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-slate-800 shadow-sm"
              >
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="dueDate" className="text-xs uppercase font-bold text-gray-500 tracking-wide">Due Date</label>
              <input 
                id="dueDate"
                name="dueDate" 
                type="date" 
                defaultValue="2025-12-15"
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-500 bg-white focus:outline-none focus:border-slate-800 shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-xs uppercase font-bold text-gray-500 tracking-wide">Details</label>
            <textarea 
              id="description"
              name="description" 
              defaultValue="Create initial wireframe designs for the new homepage layout."
              className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 leading-relaxed focus:outline-none focus:border-slate-800 shadow-sm resize-none"
            ></textarea>
          </div>

          <div className="space-y-4 pt-2 border-t border-gray-50">
            <h3 className="text-sm font-bold text-gray-800">Comments</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                 <img src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff" alt="John" className="w-8 h-8 rounded-full shadow-sm mt-1"/>
                 <div className="bg-gray-50 rounded-lg p-3 w-full border border-gray-100">
                    <div className="flex justify-between items-center mb-1">
                       <span className="font-bold text-xs sm:text-sm text-gray-900">John Doe</span>
                       <span className="text-[10px] sm:text-xs text-gray-400">2025-12-08</span>
                    </div>
                    <p className="text-sm text-gray-600">Looking good! Just a few minor suggestions.</p>
                 </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2">
              <input 
                name="newComment" 
                type="text" 
                placeholder="Write a comment..." 
                className="flex-1 border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800 shadow-sm"
              />
              <button type="button" className="bg-slate-900 text-white text-sm font-bold px-5 py-2.5 rounded shadow hover:bg-slate-800 active:scale-95 transition-all">
                Send
              </button>
            </div>
          </div>

          <div className="pt-4">
             <h3 className="text-sm font-bold text-gray-800 mb-3">Activity</h3>
             <ul className="text-xs sm:text-sm text-gray-500 space-y-3 pl-2 border-l-2 border-gray-100">
                <li className="pl-4 relative">
                  <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300"></span>
                  <span className="font-semibold text-gray-900">John Doe</span> changed status to In Progress
                  <div className="text-[10px] text-gray-400 mt-0.5">Today at 10:30 AM</div>
                </li>
                 <li className="pl-4 relative">
                  <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-300"></span>
                  <span className="font-semibold text-gray-900">Sarah Wilson</span> created task
                  <div className="text-[10px] text-gray-400 mt-0.5">Yesterday at 5:00 PM</div>
                </li>
             </ul>
          </div>

        </div>

        <div className="p-4 sm:p-5 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 sticky bottom-0">
          <button 
            type="button" 
            onClick={onClose}
            className="flex-1 sm:flex-none px-6 py-2.5 border border-gray-300 bg-white rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
          >
            Cancel
          </button>
          
          <button 
             type="submit" 
             className="flex-1 sm:flex-none px-6 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 shadow-md active:scale-95 transition-all"
          >
            Save
          </button>
        </div>

      </form>
    </div>
  );
};

export default TaskModal;