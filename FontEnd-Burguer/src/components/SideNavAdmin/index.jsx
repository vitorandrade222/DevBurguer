import Logo from '../../assets/Logo 1.svg'
import { Container, NavLink, Footer, NavLinkContainer } from './styles'
import { navLinks } from './navLinks'
import { SignOutIcon } from '@phosphor-icons/react'
import { useUser } from '../../hooks/UserContext'
import { useResolvedPath } from 'react-router-dom'

export function SideNavAdmin() {
  const { pathname } = useResolvedPath()
  const { logout } = useUser()
  return (
    <Container>
      <img src={Logo} alt='Logo DevBurguer' />
      <NavLinkContainer>
        {navLinks.map(link => (
          <NavLink key={link.id} to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to={'/login'} onClick={logout}>
          <SignOutIcon />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  )
}