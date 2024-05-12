import BaseLayout from "../../components/layouts/BaseLayout";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/slices/counterSlice";
const ReduxTaskPage = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <BaseLayout>
      <div className="w-full flex flex-col items-center justify-center  ">
        <h1 className="text-[24px] font-bold">Counter App</h1>
        <div className="flex gap-9  mt-10">
          <button
            className="p-3 bg-red-600 text-white font-bold text-[24px]"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <div className="text-[24px] font-bold">Count: {count}</div>
          <button
            className="p-3 bg-blue-500 text-white font-bold text-[24px]"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ReduxTaskPage;
