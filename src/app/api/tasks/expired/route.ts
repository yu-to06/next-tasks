import {TaskDocument, TaskModel} from "@/models/task";
import {connectDB} from "@/utils/database";
import {NextResponse} from "next/server";

export const GET = async () => {
  const currentDate = new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");
  try {
    await connectDB();
    const completedTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: false,
      dueDate: {$lt: currentDate},
    });
    return NextResponse.json({
      message: "Taskの取得に成功しました",
      tasks: completedTasks,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {message: "Taskの取得に失敗しました"},
      {status: 500}
    );
  }
};

export const dynamic = "force-dynamic";
