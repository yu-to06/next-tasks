import TaskDeleteButton from "./TaskDeleteButton/TaskDeleteButton";
import TaskEditButton from "./TaskEditButton/TaskEditButton";

const TaskCard = () => (
  <div className='w-64 h-52 p-4 bg-white rounded-md shadow-md flex flex-col justify-between'>
    <header>
      <h1 className='text-lg font-semibold'>Title</h1>
      <div className='mt-1 text-sm line-clamp-3'>Discription</div>
    </header>
    <div>
      <div className='text-sm'>2024-12-31</div>
      <div className='flex justify-between items-center'>
        <div
          className={`mt-1 text-sm px-2 py-1 w-2/4 text-center text-white rounded-full shadow-sm ${
            true ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {true ? "Completed" : "InCompleted"}
        </div>
        <div className='flex gap-4'>
          <div>
            <TaskEditButton id='1' />
          </div>
          <div>
            <TaskDeleteButton id='1' />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TaskCard;
