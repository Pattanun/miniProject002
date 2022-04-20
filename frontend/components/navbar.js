//หากเข้าที่ /foo โดยที่ยังไม่ Login จะ Redirect ไปให้ Login ก่อน แต่ถ้า Login แล้ว ก็จะแสดงข้อความคำว่า  Foo 

import Link from 'next/link'

const Navbar = () => (
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    
    <span class="font-semibold text-xl tracking-tight">GUITAR SHOP</span>
  </div>

  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-lg lg:flex-grow">

      <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </a>

      <a href="/profile" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
      Profile
      </a>
      
      <a href="/profile" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
      Profile
      </a>

    </div>

    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Register</a>
    </div>
  </div>
</nav>

)

export default Navbar