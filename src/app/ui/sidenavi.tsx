"use client"
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";


const links = [
    { name: 'TOP', href: '/',icon:"T"},
    {
      name: '数学',
      href: '/math',
      icon:"数"
    },
    { name: 'STG', href: '/stg',icon:"射"},
    //{ name: 'その他', href: '/others',icon:"他"},
    
  ];
  
  
export default function SideNav() {
    const pathname = usePathname();
    return (
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <div className="mb-2 flex h-20 items-end justify-start rounded-md bg-gray-300 p-4 md:h-40">
  
        </div>
  
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hober:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                      'bg-sky-100 text-blue-600' : pathname === link.href,
                    },
                  )}
                >
                  <p className="md:hidden w-6">{link.icon}</p>
                  <p className="hidden md:block">{link.name}</p>
                </Link>
              );
            })}
          <div className="hidden h-auto w-full grow rounded-md bg-gray-100 md:block">
          </div>
          
        </div>
      </div>
    );
  }
  