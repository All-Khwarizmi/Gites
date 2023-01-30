import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
 

const Layout= ({ children }: React.PropsWithChildren<{}>) => {
    return (
      <>
      <nav className='nav justify-center'>
      <ul className="flex-col justify-items-center">
  <li className="mr-6">
    <a className="text-white text-2xl text-justify hover:text-blue-800" href="#">Active</a>
  </li>
  <li className="mr-6">
    <a className="text-white hover:text-white-800" href="#">Link</a>
  </li>
  <li className="mr-6">
    <a className="text-white-500 hover:text-blue-800" href="#">Link</a>
  </li>
  <li className="mr-6">
    <a className="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
  </li>
</ul>

      </nav>
        
<>
  {children}
</>
      </>
      
    )
}

export default Layout