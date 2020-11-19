import * as React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer"

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

const A = () => {
    const classes = useStyles();
    const [isOpenDrawer, setDrawerState] = React.useState(false)

    return (
        <div>
            <div className={classes.root}>aaaa</div>
            <input type="button" style={{"width":"100px"}} onClick={()=>{setDrawerState(true)}} />
            <Drawer
            anchor="left"
            open={isOpenDrawer}
            onClose={() => {
                setDrawerState(false)
            }}
            >
                <div>
                    <div>aaasfasfasfa</div>
                    <div>aaasfsfsfdafasfasfa</div>
                </div>
                {/* <DrawerContents></DrawerContents> */}
            </Drawer>
            <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </div>
    )
}

export default A