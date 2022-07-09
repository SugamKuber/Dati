import React from "react";

class Importnavv extends React.Component {
    render() {
        return (
            <div>
                <div class="navbar bg-base-100">
                    <div class="flex-1">
                        <p class="btn btn-ghost normal-case text-xl">D a t i</p>
                    </div>
                    <div class="flex-none gap-2">
                        <div class="form-control">
                            <input type="text" placeholder="Search" class="input input-bordered" />
                        </div>
                        <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" alt="profile"/>
                                </div>
                            </label>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Importnavv }