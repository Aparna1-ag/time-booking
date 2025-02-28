import React from 'react'

const Vendor = () => {
    return (
        <div class="bg-white w-screen min-h-screen flex items-center justify-center">
            <div class="bg-gray-200 w-screen sm:rounded-2xl p-5">
                <div class="bg-white px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
                  
                    
                </div>

                <div class="flex-1 px-2 sm:px-0">
                    <div class="flex justify-between items-center">
                        <h3 class="text-3xl font-extralight ">Vendors</h3>
                       
                    </div>
                    <div class="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div class="group bg-white/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-white/40 hover:smooth-hover">
                            <a class="bg-white/70  /50 group-hover:  group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </a>
                            <a class=" /50 group-hover:  group-hover:smooth-hover text-center" href="#">Add New Employee</a>
                        </div>
                        <div class="relative group bg-white py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-white/80 hover:smooth-hover">
                            <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="cuisine" />
                            <h4 class="  text-2xl font-bold capitalize text-center">Revanth</h4>
                            <p class=" /50">VIN : ABJF528 </p>
                            <p class="absolute top-2  /20 inline-flex items-center text-xs">Working<span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                        </div>
                        <div class="relative group bg-white py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-white/80 hover:smooth-hover">
                            <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="art" />
                            <h4 class="  text-2xl font-bold capitalize text-center">Shiva</h4>
                            <p class=" /50">VIN : BB54975</p>
                            <p class="absolute top-2  /20 inline-flex items-center text-xs">Working<span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                        </div>
                        <div class="relative group bg-white py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-white/80 hover:smooth-hover">
                            <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="gaming" />
                            <h4 class="  text-2xl font-bold capitalize text-center">Chandru</h4>
                            <p class=" /50">Last Seen 09-12-2024 02:37</p>
                            <p class="absolute top-2  /20 inline-flex items-center text-xs">Offline<span class="ml-2 w-2 h-2 block bg-red-400 rounded-full group-hover:animate-pulse"></span></p>
                        </div>
                        <div class="relative group bg-white py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-white/80 hover:smooth-hover">
                            <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80" alt="cinema" />
                            <h4 class="  text-2xl font-bold capitalize text-center">Aparna</h4>
                            <p class=" /50">VIN : NHK5546</p>
                            <p class="absolute top-2  /20 inline-flex items-center text-xs">Working<span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                        </div>
                        <div class="relative group bg-white py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-white/80 hover:smooth-hover">
                            <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="song" />
                            <h4 class="  text-2xl font-bold capitalize text-center">Shreya</h4>
                            <p class=" /50">VIN : JJY864</p>
                            <p class="absolute top-2  /20 inline-flex items-center text-xs">Working<span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                        </div>
                        <div class="relative group bg-white py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-white/80 hover:smooth-hover">
                            <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="code" />
                            <h4 class="  text-2xl font-bold capitalize text-center">Jayati</h4>
                            <p class=" /50">JHF8865</p>
                            <p class="absolute top-2  /20 inline-flex items-center text-xs">Working<span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                        </div>
                        <div class="relative group bg-white py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-white/80 hover:smooth-hover">
                            <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="dancing" />
                            <h4 class="  text-2xl font-bold capitalize text-center">Hari</h4>
                            <p class=" /50">ERT569</p>
                            <p class="absolute top-2  /20 inline-flex items-center text-xs">Working<span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Vendor