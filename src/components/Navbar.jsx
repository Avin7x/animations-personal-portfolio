import { useState } from "react";
import { motion } from "framer-motion";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width:900px)");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setOpen(false); // close drawer when a link is clicked
  };

  const renderLinks = () =>
    navItems.map((item) => (
      <motion.li
        key={item.name}
        variants={fadeInUp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLinkClick}
      >
        <a href={item.href}>{item.name}</a>
      </motion.li>
    ));

  return (
    <motion.nav
      className="nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // style={{
      //   background:
      //     "linear-gradient(108.8deg, rgba(1,22,56,1) 21.9%, rgba(52,33,158,1) 92.2%)",
      // }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Portfolio
      </motion.div>

      {isDesktop ? (
        <motion.ul
          className="nav-links"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {renderLinks()}
        </motion.ul>
      ) : (
        <>
          {/* Hamburger / Cross toggle */}
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <CloseIcon sx={{ color: "white" }} /> : <MenuIcon sx={{ color: "white" }} />}
          </IconButton>

          {/* Mobile drawer */}
          <Drawer
            variant="temporary"
            anchor="top"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              sx: {
                width: 180,
                height: 250,
                bgcolor: "rgba(20,20,70,0.8)",  // new drawer background color
                backdropFilter: "blur(10px)",    // blur effect
                boxShadow: "none",
                mt: "70px",                      // slightly below navbar
                ml: 2,                            // optional left offset
                borderRadius: 2,
                overflow: "visible",
                p: 2,                             // padding inside drawer
              },
            }}
          >
            <motion.ul
              className="nav-links"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              style={{
                display: "flex",
                flexDirection: "column",
                listStyle: "none",
                padding: 0,
                margin: 0,
                height: "100%",
                justifyContent: "space-evenly",
                paddingLeft: "10px", // move links away from extreme left
              }}
            >
              {renderLinks()}
            </motion.ul>
          </Drawer>
        </>
      )}
    </motion.nav>
  );
};

export default Navbar;
