import { Box, Paper, Typography } from '@mui/material';
import { ExpandMore, KeyboardArrowRightOutlined } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';



const Links = ({title}) => {
    return (
        <Box
            //className="border" 
            sx={{
                ":hover .show-when-hover": { display: "block", },
                ":hover": { cursor: "pointer" },
                position: "relative", display: "flex", alignItems: "center"
            }}>
            <Typography variant="body1">{title}</Typography>
            <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />


            <Box className=" show-when-hover " sx={{
                position: "absolute", top: "100%", minWidth: "170px", left: "50%", transform: "translateX(-50%)",
                display: "none", zIndex:2,
            }}>
                <Paper sx={{ mt: 2 }} className="" >

                    <nav aria-label="secondary mailbox folders">
                        <List>

                            <ListItem disablePadding>
                                <ListItemButton sx={{ dispaly: "flex", p: 0, px: 1.5, }}>
                                    <ListItemText sx={{
                                        "& .MuiTopography-root": { fontSize: "15px", fontWeight: 300 },
                                    }} primary="Dashboard" />
                                    <box flexGrow={1} />
                                </ListItemButton>



                            </ListItem>

                            <ListItem disablePadding sx={{ ":hover .sub-link": { display: "block" }, position: "relative" }}>
                                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5, }}>
                                    <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300, }, }}
                                        primary="Products"
                                    />
                                    <Box flexGrow={1} />

                                    <KeyboardArrowRightOutlined fontSize="small" />
                                </ListItemButton>

                                <Box className="sub-link " sx={{
                                    display: "none",
                                    position: "absolute", top: 0, left: "100%"
                                }}>
                                    <Paper sx={{ ml: 1, minWidth: 150 }}>
                                        <nav aria-label="secondary mailbox folders">
                                            <List>

                                                <ListItem disablePadding>
                                                    <ListItemButton sx={{ display: "flex", p: 0, px: 1.5, }}>
                                                        <ListItemText sx={{
                                                            "& .MuiTypography-root": {
                                                                fontSize: "15px",
                                                                fontWeight: 300,
                                                            },
                                                        }}
                                                            primary="Add Product" />
                                                        <Box flexGrow={1} />

                                                    </ListItemButton>
                                                </ListItem>

                                                <ListItem disablePadding>
                                                    <ListItemButton sx={{ display: "flex", p: 0, px: 1.5, }}>
                                                        <ListItemText sx={{
                                                            "& .MuiTypography-root": {
                                                                fontSize: "15px",
                                                                fontWeight: 300,
                                                            },
                                                        }}
                                                            primary="Edit Product" />
                                                        <Box flexGrow={1} />

                                                    </ListItemButton>
                                                </ListItem>


                                            </List>
                                        </nav>
                                    </Paper>
                                </Box>

                            </ListItem>



                            <ListItem disablePadding>
                                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5, }}>
                                    <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300, }, }}
                                        primary="Orders"
                                    />
                                    <Box flexGrow={1} />

                                </ListItemButton>
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5, }}>
                                    <ListItemText sx={{ "& .MuiTypography-root": { fontSize: "15px", fontWeight: 300, }, }}
                                        primary="Profile"
                                    />
                                    <Box flexGrow={1} />

                                </ListItemButton>
                            </ListItem>



                        </List>
                    </nav>
                </Paper>
            </Box>


        </Box >
    )
}

export default Links;