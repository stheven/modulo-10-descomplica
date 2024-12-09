import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Drawer,ListItem,ListItemButton,ListItemIcon,ListItemText } from '@mui/material'
import TaskIcon from '@mui/icons-material/Task'
import HomeIcon from '@mui/icons-material/Home'

function Header() {

  const [open,setOpen] = React.useState(false)

  const toggleDrawer = React.useCallback(() => {
    setOpen(open => !open)
  },[])

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar
            variant='dense'
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >

              <MenuIcon />

            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gerenciamento de Projetos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <Box
          width={250}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TaskIcon />
              </ListItemIcon>
              <ListItemText primary={"Tarefas"} />
            </ListItemButton>
          </ListItem>
        </Box>
      </Drawer>
    </>
  )
}

export default Header