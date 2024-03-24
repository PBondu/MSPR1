import moment from "moment";

export default function ShowInfo({ group, spot, time }){
  return(
      <li className="flex justify-center items-center h-fit">
        <div className="flex flex-col justify-center items-center w-4/5 h-20 my-5 bg-slate-50 rounded-md">
          <p className="flex justify-center items-center h-10 w-4/5 font-bold">{group}</p>
          <div className="flex flex-row h-14">
            <p className="flex items-center w-32">{spot}</p>
            <p className="flex justify-center items-center w-24">{moment(time).format("D/M [-] H:mm")}</p> 
          </div>
        </div>
      </li>
  );
}