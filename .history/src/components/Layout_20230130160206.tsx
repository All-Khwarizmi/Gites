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
      <ul className="flex justify-items-center space-between">
  <li className="mr-6">
    <a className="text-white text-2xl text-justify hover:text-blue-800" href="#">Accueil</a>
  </li>
  <li className="mr-6">
    <a className="text-white text-2xl text-justify hover:text-blue-800" href="#">Contact</a>
  </li>
  <li className="mr-6">
    <a className="text-white text-2xl text-justify hover:text-blue-800" href="#">P</a>
  </li>
  <li className="mr-6">
    <a className="text-white text-2xl text-justify hover:text-blue-800" href="#">Disabled</a>
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