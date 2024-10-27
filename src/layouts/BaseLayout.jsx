import {Outlet} from "react-router-dom";

const BaseLayout = () => {
    return (
        <>
            <main className="size-full min-h-screen dark:bg-slate-900 bg-slate-200 flex-center sm:p-5">
                <div className="w-screen h-screen sm:w-[94vw] sm:h-[96vh] lg:h-[92vh]">
                    <div
                        className="size-full dark:bg-dark bg-white sm:shadow-sm flex sm:rounded-2xl flex-col-reverse sm:flex-row">
                        <Outlet/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default BaseLayout;
