

 function OldCode(){
return(
<div className="  max-w-7xl mx-auto">
        <nav className=" py-4 flex  justify-between sm:px-2 ">
            <div className="flex gap-2 items-center">
                <button className="sm:h-10 sm:w-10 h-8 w-8  border border-gray-600 rounded-md">-</button>
                <img className="sm:h-14 sm:w-14 h-10 w-10 border border-gray-600 rounded-full"></img>
                <ul className="flex gap-1 ">
                    <li>
                        <a className="hover:bg-gray-300 sm:px-2 px-1 py-1 rounded-md cursor-pointer sm:text-base text-sm" href="">HARIPRIYA-5565</a>
                    </li>
                    <li> <span className="sm:pl-1 sm:text-base text-sm">/</span></li>
                    <li>
                        <a className="hover:bg-gray-300 sm:px-2 px-1 py-1 cursor-pointer rounded-md sm:text-base text-sm" href="">grid_responsive_layout </a>
                    </li>
                </ul>
            </div>
            <div className="divide-x items-center divide-gray-300 space-x-2 sm:flex  hidden ">
                <span><input className="border border-gray-700 rounded-md py-1 px-2" type="text" placeholder='Type your text here'>
                    <button className="border border-gray-600 py-1 rounded-md px-1 hover:bg-gray-300">
                    </button>
                </input></span>
                <span className="flex gap-2 items-center pl-2">
                    <button className="border border-gray-600 py-1 rounded-md px-3 hover:bg-gray-300"> +
                    </button>
                    <button className="border border-gray-600 py-1 rounded-md px-3 hover:bg-gray-300"> o
                    </button>
                    <button className="border border-gray-600 py-1 rounded-md px-3 hover:bg-gray-300"> P.R
                    </button>
                    <button className="border border-gray-600 py-1 rounded-md px-3 hover:bg-gray-300"> Noti
                    </button>
                    <span> <img className="h-14 w-14 border border-gray-600 rounded-full"></img></span>
                </span>
            </div>
            {/*  mob view part */}
            <div className="sm:hidden block pt-2">
                <span className="flex gap-1 items-center ">
                    <button className="border border-gray-600 py-1 rounded-md px-3 hover:bg-gray-300 text-xs"> search
                    </button>
                    <button className="border border-gray-600 py-1 rounded-md px-3 hover:bg-gray-300 text-xs"> Noti
                    </button>
                    <img className="sm:h-14 sm:w-14 h-10 w-10 border border-gray-600 rounded-full"></img>
                </span>
            </div>

        </nav>
        <div className=" border-b pb-2 flex px-2 justify-between">
            <ul className="flex gap-4  ">
                <li>
                    <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer rounded-md"> <img className="h-4 w-4 border border-gray-600" href=""></img> <span>Code</span></a>
                </li>
                <li>
                    <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer rounded-md"> <img className="h-4 w-4 border border-gray-600" href=""></img> <span>Issues</span></a>
                </li>
                <li className="sm:block hidden">
                    <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer rounded-md"> <img className="h-4 w-4 border border-gray-600" href=""></img> <span>Pull Request</span></a>
                </li>
                <li className="sm:block hidden">
                    <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer rounded-md"> <img className="h-4 w-4 border border-gray-600" href=""></img> <span>Actions</span></a>
                </li>
                <li className="sm:block hidden">
                    <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer rounded-md"> <img className="h-4 w-4 border border-gray-600" href=""></img> <span>Projects</span></a>
                </li>
                <li className="sm:block hidden">
                    <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer rounded-md"> <img className="h-4 w-4 border border-gray-600" href=""></img> <span>WiKi</span></a>
                </li>
                <li className="sm:block hidden">
                    <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer rounded-md"> <img className="h-4 w-4 border border-gray-600" href=""></img> <span>Security</span></a>
                </li>
                <li className="sm:block hidden">
                    <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer rounded-md"> <img className="h-4 w-4 border border-gray-600" href=""></img> <span>Insights</span></a>
                </li>
                <li className="sm:block hidden">
                    <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer rounded-md" href=""> <img className="h-4 w-4 border border-gray-600"></img> <span>Settings</span></a>
                </li>
            </ul>

            <button className="sm:h-10 sm:w-10 h-8 w-8  border border-gray-600 rounded-md sm:hidden block">-</button>

        </div>
        <div className=" sm:flex hidden justify-between mx-4 border-b py-3">
            <div className="flex items-center gap-2 "><img className="h-10 w-10 border border-gray-600 rounded-full"></img>
                <a className="cursor-pointer hover:underline font-medium text-xl" href="">grid_responsive_layout</a>
                <span className="text-sm rounded-full border px-1.5">Public</span>
            </div>

            <div className="flex gap-2 ">
                <button>
                    <a className="hover:bg-gray-300 flex gap-2 px-2 items-center py-1 cursor-pointer border rounded-md" href=""> <img className="h-4 w-4 border"></img> <span>Pin</span></a>
                </button>
                <button>
                    <a className="hover:bg-gray-300 flex gap-2 px-2 items-center py-1 cursor-pointer border rounded-md" href=""> <img className="h-4 w-4 border"></img> <span>Unwatch</span> <span className="bg-gray-200 rounded-full px-1 text-sm">1</span> <img className="h-4 w-4 border"></img>  </a></button>
                <button className="flex items-center">
                    <a className="hover:bg-gray-300 flex gap-2 px-2 items-center py-1 cursor-pointer rounded-l-md  border-b border-t border-l" href=""> <img className="h-4 w-4 border"></img> <span>Fork</span> <span className="bg-gray-200 rounded-full px-1 text-sm">1</span> <img className="h-4 w-4 border"></img>  </a><span className="px-2 py-1 border rounded-r-md hover:bg-gray-200">{">"}</span></button>
                <button className="flex items-center">
                    <a className="hover:bg-gray-300 flex gap-2 px-2 items-center py-1 cursor-pointer rounded-l-md  border-b border-t border-l" href=""> <img className="h-4 w-4 border"></img> <span>Star</span> <span className="bg-gray-200 rounded-full px-1 text-sm">1</span> <img className="h-4 w-4 border"></img>  </a><span className="px-2 py-1 border rounded-r-md hover:bg-gray-200">{">"}</span></button>
            </div>
        </div>
        <div className="sm:hidden block space-y-2 py-4 px-2 border-b ">
            <span><button>
                <a className="hover:bg-gray-300 flex gap-2 px-2 items-center py-1 cursor-pointer border border-gray-600 rounded-md" href=""> <img className="h-6 w-6 border"></img> </a>
            </button>
                <button>
                    <a className="hover:bg-gray-300 flex gap-2 px-2 items-center py-1 cursor-pointer border border-gray-600 rounded-md" href=""> <img className="h-6 w-6 border"></img> </a>
                </button>
                <button>
                    <a className="hover:bg-gray-300 flex gap-2 px-2 items-center py-1 cursor-pointer border border-gray-600 rounded-md" href=""> <img className="h-6 w-6 border"></img> </a>
                </button></span>
            <div className="space-y-2 px-2">
                <div className="flex gap-4 ">
                    <a className=" flex gap-2 items-center hover:text-blue-600">
                        <img className="h-4 w-4 "></img>
                        <span> 0 stars</span>
                    </a>
                    <a className=" flex gap-2 items-center hover:text-blue-600">
                        <img className="h-4 w-4 "></img>
                        <span> 1 watching</span>
                    </a>
                    <a className=" flex gap-2 items-center hover:text-blue-600">
                        <img className="h-4 w-4 "></img>
                        <span>  0 forks</span>
                    </a>
                </div><div>

                    <a className=" flex gap-2 items-center hover:text-blue-600">
                        <img className="h-4 w-4 "></img>
                        <span> Activity</span>
                    </a>
                </div>
                <div>
                    <a className=" flex gap-2 items-center hover:text-blue-600">
                        <img className="h-4 w-4 "></img>
                        <span>Public repository</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="grid sm:grid-cols-12 grid-cols-1">
            <div className="sm:col-span-9  col-span-1 sm:mx-6 mx-3 pt-4 sm:pt-0">
                <div className="flex flex-row justify-between">
                    <span className="flex sm:flex-row flex-col flex-wrap gap-2 ">
                        <button className="flex items-center">
                            <a className="hover:bg-gray-300 flex gap-2 px-3 items-center py-1 cursor-pointer bg-gray-300 rounded-md  border " href=""> <img className="h-4 w-4 border bg-white"></img> <span>master</span>  <img className="h-4 w-4 border bg-white"></img></a></button>
                        <button className="sm:block hidden">
                            <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer rounded-md   " href=""> <img className="h-4 w-4 border"></img> <span className="  text-sm">1</span><span>branch</span>  </a></button>
                        <button className="sm:block hidden">
                            <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer rounded-md   " href=""> <img className="h-4 w-4 border"></img><span className="  text-sm">1</span><span>tags</span></a></button>
                        <span className="sm:hidden block"> <button>
                            <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer rounded-md   " href=""> <img className="h-4 w-4 border"></img> <span className="  text-sm">1</span><span>branch</span>  </a></button>
                            <button>
                                <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer rounded-md   " href=""> <img className="h-4 w-4 border"></img><span className="  text-sm">1</span><span>tags</span></a></button></span>
                    </span>

                    <span className="sm:flex gap-2 py-2 hidden">
                        <button className="flex items-center">
                            <a className="hover:bg-gray-300 flex gap-3 px-2 items-center py-1 cursor-pointer rounded-md  border " href="">  <span>Go to file</span>  </a></button>
                        <button>
                            <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer border rounded-md   " href=""> <span>Add file</span><img className="h-4 w-4 border"></img>   </a></button>
                        <button>
                            <a className="hover:bg-gray-300 flex gap-1 px-2 items-center py-1 cursor-pointer border rounded-md   " href=""> <img className="h-4 w-4 border"></img><span className="  text-sm">1</span><span>tags</span></a></button>
                        <button>
                            <a className="hover:bg-gray-300 flex gap-2 px-2 items-center py-1 cursor-pointer rounded-md bg-green-500  " href=""> <img className="h-4 w-4 border bg-white"></img><span>Code</span><img className="h-4 w-4 border bg-white"></img></a></button>
                    </span>
                    <span className="sm:hidden block">
                        <button className="sm:h-10 sm:w-10 h-8 w-8  border border-gray-600 rounded-md ">-</button>
                    </span>
                </div>
                <div className="border border-gray-800 rounded-md my-3">
                    <div className="flex justify-between px-2 border-b py-1">
                        <span className="flex items-center py-2 text-base"><img className="h-8 w-8 border border-gray-600 rounded-full "></img>
                            <a className="cursor-pointer hover:underline font-medium  pl-2" href="">HARIPRIYA-5565</a>
                            <span className="hover:text-blue-600 hover:underline cursor-pointer pl-1 sm:block hidden"> first commit</span> </span>
                        <span className="text-sm  flex items-center gap-2 ">
                            <a className="hover:text-blue-600 hover:underline cursor-pointer sm:block hidden">e29b1cd
                            </a>
                            <a className="hover:text-blue-600 hover:underline cursor-pointer">on Mar 16,2022
                            </a>
                            <a className="hover:text-blue-600 hover:underline  sm:flex  hidden gap-1  items-center cursor-pointer   " href=""> <img className="h-4 w-4 border"></img><span className="  text-sm">1</span><span>Commit</span></a>
                            <a className="hover:text-blue-600 hover:underline  sm:hidden block  items-center cursor-pointer   " href=""> <img className="h-4 w-4 border"></img></a>
                        </span>
                    </div>
                    <table className="w-full">
                        <tr className="border-b py-1 flex justify-between px-4 hover:bg-gray-200">
                            <td className="">
                                <a className="hover:text-blue-600 hover:underline cursor-pointer">layout 1</a>
                            </td>
                            <td className="">
                                <a className="hover:text-blue-600 sm:block hidden hover:underline cursor-pointer text-gray-500"> first commit</a>
                            </td>
                            <td className="text-gray-500 ">
                                last year
                            </td>
                        </tr>
                        <tr className=" flex justify-between py-1 px-4 hover:bg-gray-200">
                            <td className=" ">
                                <a className="hover:text-blue-600 hover:underline cursor-pointer">layout 2</a>
                            </td>
                            <td>
                                <a className="hover:text-blue-600 hover:underline cursor-pointer text-gray-500 sm:block hidden">first commit</a>
                            </td>
                            <td className="text-gray-500">
                                last year
                            </td>
                        </tr>
                    </table>
                </div>


                <div className="bg-blue-500 border-2 border-blue-600 rounded-lg flex justify-between px-4 py-4">
                    <span>
                        <p className="text-white sm:text-base text-sm">
                            Help people interested in <br className="sm:hidden block" />this repository<br className="sm:hidden block" /> understand your project by adding a README.</p>
                    </span>
                    <span> <button className="bg-green-700 text-white px-3 py-1 rounded-md sm:text-base hover:bg-gray-800 text-xs">
                        Add a README
                    </button></span>

                </div>

                <div className="sm:col-span-3 col-span-1  py-3 divide-y-2 mx-3">
                    <div className="space-y-2 pb-4 sm:block hidden">
                        <span className="flex justify-between"> <h2 className="font-medium">About</h2>
                            <img className="h-6 w-6 "></img></span>
                        <p>No description, website, or topics provided.</p>
                        <ul>
                            <li>
                                <a className=" flex gap-2 items-center hover:text-blue-600">
                                    <img className="h-4 w-4 "></img>
                                <span> Activity</span>
                            </a>
                        </li>
                        <li>
                            <a className=" flex gap-2 items-center hover:text-blue-600">
                                <img className="h-4 w-4 "></img>
                            <span> 0 stars</span>
                        </a>
                    </li>
                    <li>
                        <a className=" flex gap-2 items-center hover:text-blue-600">
                            <img className="h-4 w-4 "></img>
                        <span> 1 watching</span>
                    </a>
                </li>
                <li>
                    <a className=" flex gap-2 items-center hover:text-blue-600">
                        <img className="h-4 w-4 "></img>
                    <span>  0 forks</span>
                </a>
            </li>

        </ul>
    </div><div className="py-4 ">

            <h2 className="hover:text-blue-600 cursor-pointer font-medium"><a>Releases</a></h2>
            <ul className="leading-6 pt-4">
                <li className="text-gray-600"> No releases published</li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer"><a>Create a new release</a></li>
            </ul>
        </div><div className="py-4 ">

            <h2 className="hover:text-blue-600 cursor-pointer font-medium"><a>Packages</a></h2>
            <ul className="leading-6 pt-4">
                <li className="text-gray-600"> No Packages published</li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer"><a>Publish your first package</a></li>
            </ul>
        </div><div className="py-4">
            <h2 className=" font-medium">Languages</h2>
            <div className="pt-4"><div className="h-3 border border-gray-800 rounded-full  "></div>
                <div className="flex gap-6">
                    <span className="flex items-center gap-2"><img className='h-2 w-2 border border-gray-800 rounded-full'></img>
                        <span className="font-medium">CSS<span className="text-gray-600 text-sm">
                            75.7%
                        </span></span></span>
                    <span className="flex items-center gap-2"><img className='h-2 w-2 border border-gray-800 rounded-full'></img>
                        <span className="font-medium">HTML<span className="text-gray-600 text-sm">
                            75.7%
                        </span></span></span>
                </div></div>
        </div><div className="py-4 space-y-6">
            <span className="leading-5"> <h2 className="font-medium">Suggested Workflows</h2>
                <h3 className="text-sm text-gray-800"> Based on your tech stack</h3></span>
            <div className="border border-gray-600 rounded-lg  py-4  space-y-2 px-2">
                <div className="flex justify-between"><span className="flex"><img className="h-8 w-8 border border-gray-600 rounded-full"></img>
                    <h2 className="font-medium pl-2">Actions Importer</h2></span>
                    <div> <button className="border border-gray-400 rounded-md px-4 text-sm"><a href="">Set up</a></button></div>
                </div>
                <span className="flex justify-center  ">
                    <p className='text-xs  '>Automatically convert CI/CD files to <br/>YAML for GitHub Actions.</p>
                </span>
            </div>
            <div className="border border-gray-600 rounded-lg  py-4  space-y-2 px-2">
                <div className="flex justify-between"><span className="flex"><img className="h-8 w-8 border border-gray-600 rounded-full"></img>
                    <h2 className="font-medium pl-2">SLSA Generic generator</h2> </span><span><button className="border border-gray-400 rounded-md text-sm px-2 "><a href="">Configure</a></button></span>
                </div>
                <span className="flex justify-center  ">
                    <p className='text-xs  '>Generate SLSA3 provenance for your <br/>existing release workflows</p>
                </span>
            </div>
            <div className="border border-gray-600 rounded-lg  py-4  space-y-2 px-2">
                <div className="flex justify-between"><span className="flex"><img className="h-8 w-8 border border-gray-600 rounded-full"></img>
                    <h2 className="font-medium pl-2">Jekyll using Docker image</h2> </span><span><button className="border border-gray-400 rounded-md text-sm px-2 "><a href="">Configure</a></button></span>
                </div>
                <span className="flex justify-center">
                    <p className='text-xs'>Package a Jekyll site using the<br/>jekyll/builder Docker image.</p>
                </span>
            </div>
            <div className='flex justify-between '>
                <span className="text-blue-600  text-sm hover:text-blue-800 hover:underline ">
                    <a href=""> More workflows</a>
                </span>
                <span className="text-gray-600 text-sm  hover:text-gray-800 hover:underline">
                    <a href=""> Dissmiss Suggessions</a>
                </span>
            </div>
        </div>
</div>
</div>
<footer className="col-span-12 sm:mx-6 flex flex-wrap items-center justify-center sm:justify-normal sm:gap-12 border-t border-gray-300 py-4">
  <span className="sm:flex  hidden  gap-1">
    <a href=""><img className="h-4 w-4 rounded-full border border-gray-500"></img></a>
    <h4 className="text-gray-700 text-xs">© 2023 GitHub, Inc.</h4>
    </span>
    <ul className="text-sm flex flex-wrap sm:justify-normal justify-center sm:gap-8 gap-4">
      <li className="text-blue-600 hover:underline"><a href="">
Terms</a></li>
<li className="text-blue-600 hover:underline"><a href="">

Privacy</a></li>
<li className="text-blue-600 hover:underline"><a href="">

Security</a></li>
<li className="text-blue-600 hover:underline"><a href="">
Status</a></li>
<li className="text-blue-600 hover:underline"><a href="">
Docs</a></li>
<li className="text-blue-600 hover:underline"><a href="">
Contact Github</a></li>
<li className="text-blue-600 hover:underline"><a href="">
Pricing</a></li>
<li className="text-blue-600 hover:underline"><a href="">
API</a></li>
<li className="text-blue-600 hover:underline"><a href="">
Training</a></li>
<li className="text-blue-600 hover:underline"><a href="">
Blog</a></li>
<li className="text-blue-600 hover:underline"><a href="">
About</a></li>
    </ul>
    <span className="sm:hidden flex pt-4 gap-1">
    <a href=""><img className="h-4 w-4 rounded-full border border-gray-500"></img></a>
    <h4 className="text-gray-700 text-xs">© 2023 GitHub, Inc.</h4>
    </span>
  </footer>

</div>
</div>
)
}

export default OldCode

