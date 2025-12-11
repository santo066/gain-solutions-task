import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";


const tasks = [
  { id: 1, title: "Design homepage wireframe", status: "Backlog", priority: "High", due: "Dec 15", assignee: "John Doe", comments: 3, attachments: 2 },
  { id: 2, title: "Setup project repository", status: "Backlog", priority: "Medium", due: "Dec 10", assignee: "Jane Smith", comments: 1, attachments: 0 },
  { id: 3, title: "API integration for user auth", status: "In Progress", priority: "High", due: "Dec 12", assignee: "Mike Johnson", comments: 5, attachments: 1 },
  { id: 4, title: "Create dashboard components", status: "In Progress", priority: "Medium", due: "Dec 14", assignee: "Sarah Wilson", comments: 2, attachments: 3 },
  { id: 5, title: "Review pull request #42", status: "Review", priority: "High", due: "Dec 9", assignee: "Jane Smith", comments: 8, attachments: 0 },
  { id: 6, title: "Update documentation", status: "Review", priority: "Low", due: "Dec 16", assignee: "Mike Johnson", comments: 1, attachments: 2 },
  { id: 7, title: "Fix navigation bug", status: "Done", priority: "High", due: "Dec 5", assignee: "Sarah Wilson", comments: 4, attachments: 1 },
  { id: 8, title: "Implement dark mode", status: "Done", priority: "Medium", due: "Dec 6", assignee: "John Doe", comments: 6, attachments: 0 },
];

const COLUMNS = ["Backlog", "In Progress", "Review", "Done"];

const PRIORITY_STYLES = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-amber-100 text-amber-700",
  Low: "bg-emerald-100 text-emerald-700",
};

const STATUS_STYLES = {
  "Backlog": "bg-gray-100 text-gray-700",
  "In Progress": "bg-blue-100 text-blue-700",
  "Review": "bg-purple-100 text-purple-700",
  "Done": "bg-green-100 text-green-700",
};

const Home = () => {
  const [viewType] = useOutletContext();
  const [mobileCategory, setMobileCategory] = useState("Backlog");
  const mobileFilteredTasks = tasks.filter((task) => task.status === mobileCategory);

  return (
    <div className="h-full w-full">


      <div className="lg:hidden flex flex-col gap-6 h-full">


        <div className="w-full">
          <label className="text-xs font-bold text-gray-500 uppercase mb-2 block tracking-wide ml-1">
            Select Status
          </label>
          <div className="relative">
            <select
              value={mobileCategory}
              onChange={(e) => setMobileCategory(e.target.value)}
              className="appearance-none w-full bg-white border border-gray-300 text-gray-800 text-base rounded-lg py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-800 font-medium shadow-sm transition-all"
            >
              {COLUMNS.map((col) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-600">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>


        <div className="flex-1 overflow-y-auto pb-20">
          {viewType === "kanban" ? (
            <MobileKanbanView tasks={mobileFilteredTasks} />
          ) : (
            <MobileListView tasks={mobileFilteredTasks} />
          )}
        </div>
      </div>

      <div className="hidden lg:block h-full">
        {viewType === "kanban" ? (
          <DesktopKanbanBoard tasks={tasks} />
        ) : (
          <DesktopTableView tasks={tasks} />
        )}
      </div>
    </div>
  );
};

const MobileKanbanView = ({ tasks }) => {
  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-3">

          <div className="flex justify-between items-start">
            <h4 className="font-bold text-gray-800 text-base leading-snug">{task.title}</h4>
            <button className="text-gray-400 -mt-1 -mr-2 p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </button>
          </div>

          <div className="flex gap-2 mb-1">
            <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${STATUS_STYLES[task.status]}`}>
              {task.status}
            </span>
            <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${PRIORITY_STYLES[task.priority]}`}>
              {task.priority}
            </span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-1">
            <div className="flex items-center gap-2">
              <img src={`https://ui-avatars.com/api/?name=${task.assignee}&size=64&background=random`} alt={task.assignee} className="w-7 h-7 rounded-full" />
              <span className="text-sm text-gray-600 font-medium">{task.assignee}</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1">
                📅 {task.due.split(',')[0]}
              </span>
              <span className="flex items-center gap-1">
                💬 {task.comments}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


const MobileListView = ({ tasks }) => {
  if (tasks.length === 0) return <EmptyState />;

  return (
    <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-100 shadow-sm">
      {tasks.map((task) => (
        <div key={task.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
          <div className="flex flex-col gap-1 w-2/3">
            <span className="font-semibold text-gray-800 text-sm truncate">{task.title}</span>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${PRIORITY_STYLES[task.priority]}`}>
                {task.priority}
              </span>
              <span className="text-xs text-gray-500">• {task.assignee}</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-xs font-bold text-gray-400">{task.due}</span>
            <span className="text-xs text-gray-300 flex items-center gap-1">💬 {task.comments}</span>
          </div>
        </div>
      ))}
    </div>
  );
}


const DesktopKanbanBoard = ({ tasks }) => {
  return (
    <div className="flex gap-6 h-full pb-2">
      {COLUMNS.map((col) => {
        const colTasks = tasks.filter((t) => t.status === col);
        return (
          <div key={col} className="w-[320px] xl:w-[350px] flex-shrink-0 flex flex-col h-full bg-gray-50/50 rounded-xl">

            <div className="flex items-center justify-between bg-white p-3 rounded-t-xl border border-gray-200 border-b-0 shadow-sm mb-3">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-gray-700">{col}</h3>
                <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full font-bold">
                  {colTasks.length}
                </span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">+</button>
            </div>

            <div className="flex-1 overflow-y-auto px-1 scrollbar-thin scrollbar-thumb-gray-300">
              <div className="flex flex-col gap-3">
                {colTasks.map((task) => (
                  <div key={task.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group">
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 p-0.5">
                        <img src={`https://ui-avatars.com/api/?name=${task.assignee}`} className="rounded-full" alt="avt" />
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${PRIORITY_STYLES[task.priority]}`}>
                        {task.priority}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-4 leading-tight">{task.title}</h4>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-50 text-xs text-gray-400">
                      <span className="font-medium">📅 {task.due}</span>
                      <span className="flex gap-2">💬 {task.comments} 📎 {task.attachments}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


const DesktopTableView = ({ tasks }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full text-left text-sm text-gray-600">
        <thead className="bg-gray-50 text-xs uppercase font-bold text-gray-500 border-b border-gray-200">
          <tr>
            <th className="px-6 py-4">Task Title</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Assignee</th>
            <th className="px-6 py-4">Priority</th>
            <th className="px-6 py-4">Due Date</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {tasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-gray-800">{task.title}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${STATUS_STYLES[task.status]}`}>
                  {task.status}
                </span>
              </td>
              <td className="px-6 py-4 flex items-center gap-2">
                <img src={`https://ui-avatars.com/api/?name=${task.assignee}`} className="w-6 h-6 rounded-full" alt="avt" />
                {task.assignee}
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-md text-xs font-bold border ${PRIORITY_STYLES[task.priority]}`}>
                  {task.priority}
                </span>
              </td>
              <td className="px-6 py-4">{task.due}, 2025</td>
              <td className="px-6 py-4 text-right text-lg text-gray-400 font-bold cursor-pointer hover:text-gray-600">⋮</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-10 text-gray-400 bg-gray-50/50 rounded-lg border-2 border-dashed border-gray-200">
    <p>No tasks in this category.</p>
  </div>
);

export default Home;