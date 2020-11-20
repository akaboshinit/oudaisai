import react, { useState,useEffect }  from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import makeStyles from '@material-ui/core/styles/makeStyles';
import theme from '../styles/theme';

import format from 'date-fns/format'
import differenceInMinutes from 'date-fns/differenceInMinutes'

import Card from '@material-ui/core/Card';
import { CardContent,Typography } from '@material-ui/core';

import time_table_21 from '../time_tabel_21.json'
import time_table_22 from '../time_table_22.json'

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    big_card: {
        textAlign:'center',
        margin:'20px 8px',
        ['@media (min-width:700px)']: {
            width: '700px',
            margin: '20px auto'
        }
    },
    card: {
        margin:'20px 8px',
        ['@media (min-width:700px)']: {
            width: '700px',
            margin: '20px auto'
        }
    },
    title: {
        fontSize:'1rem'
    },
    content: {
        fontSize:'0.8rem'
    },
    incard: {
        margin:'20px 0'
    },
    title: {
        fontSize:'1rem'
    },
    subtitle: {
        fontSize:'0.9rem'
    },
    waittime: {
        fontSize:'0.9rem'
    },
    box: {
        display: props => props.display
    }
});

const Home = () => {
    const [bom, setBom] = useState({display:"none"})
    const classes = useStyles(bom);
    const [box, setBox] = useState([])
    const [air, setAir] = useState([[]])

    useEffect(()=>{
        realtime()
        setInterval(()=>{
            realtime()
        },60000)
    },[])

    const realtime = () => {
        if ( 21 == format(new Date(),'d') ) {
            let box = time_table_21.map((item) => {
                let box = []
                let box_y = []
                let box_z = []
    
                item.map((array) => {
                    const time_distance = differenceInMinutes(
                        new Date(2020, 11, array.day, array.time_start_h, array.time_start_m),//データをいれる,それまでの分が出る
                        new Date(2020, 11, format(new Date(),'d'), format(new Date(),'H'), format(new Date(),'m'))
                    )
                    let str = array.name +'+'+ array.add +'/'+ time_distance + '分後スタート' + '&' + array.time_start_h + ':' + array.time_start_m + '～'
                    if ( time_distance <= 0 ) {
                        str = array.name +'+'+ array.add +'/'+ time_distance + '分前から' + '&' + array.time_start_h + ':' + array.time_start_m + '～'
                    }
                    if ( time_distance <= 30 && time_distance >= 0 ) {
                        // 30分前に表示
                        if ( item == time_table_21[0] ) {
                            box_y.push('30' + str)
                        }
                        if ( item == time_table_21[1] ) {
                            box_z.push(str)
                        }
                    }
                    if ( time_distance >= -(array.time_total) && time_distance <= 0 ) {
                        // 開催中に表示
                        if ( item == time_table_21[0] ) {
                            box_y.push(str)
                        }
                        if ( item == time_table_21[1] ) {
                            box_z.push(str)
                        }
                    }
                    return
                })
                box.push(box_y,box_z)
                return box
            })
            setBox(box)
        }

        if ( 22 == format(new Date(),'d') ) {
            let box = time_table_22.map((item) => {
                let box = []
                let box_y = []
                let box_z = []
    
                item.map((array) => {
                    const time_distance = differenceInMinutes(
                        new Date(2020, 11, array.day, array.time_start_h, array.time_start_m),//データをいれる,それまでの分が出る
                        new Date(2020, 11, format(new Date(),'d'), format(new Date(),'H'), format(new Date(),'m'))
                    )
                    let str = array.name +'+'+ array.add +'/'+ time_distance + '分後スタート' + '&' + array.time_start_h + ':' + array.time_start_m + '～'
                    if ( time_distance <= 0 ) {
                        str = array.name +'+'+ array.add +'/'+ time_distance + '分前から' + '&' + array.time_start_h + ':' + array.time_start_m + '～'
                    }
                    if ( time_distance <= 30 && time_distance >= 0 ) {
                        // 30分前に表示
                        if ( item == time_table_21[0] ) {
                            box_y.push('30' + str)
                        }
                        if ( item == time_table_21[1] ) {
                            box_z.push(str)
                        }
                    }
                    if ( time_distance >= -(array.time_total) && time_distance <= 0 ) {
                        // 開催中に表示
                        if ( item == time_table_21[0] ) {
                            box_y.push(str)
                        }
                        if ( item == time_table_21[1] ) {
                            box_z.push(str)
                        }
                    }
                    return
                })
                box.push(box_y,box_z)
                return box
            })
            setBox(box)

        } else {
            let box = time_table_21.map((item) => {
                let box = []
                let box_y = []
                let box_z = []
    
                item.map((array) => {
                    const time_distance = differenceInMinutes(
                        new Date(2020, 11, array.day, array.time_start_h, array.time_start_m),//データをいれる,それまでの分が出る
                        new Date(2020, 11, format(new Date(),'d'), format(new Date(),'H'), format(new Date(),'m'))
                    )
                    let str = array.name +'+'+ array.add +'/'+ time_distance + '分後スタート' + '&' + array.time_start_h + ':' + array.time_start_m + '～'
                    if ( time_distance <= 0 ) {
                        str = array.name +'+'+ array.add +'/'+ time_distance + '分前から' + '&' + array.time_start_h + ':' + array.time_start_m + '～'
                    }
                    if ( time_distance <= 30 && time_distance >= 0 ) {
                        // 30分前に表示
                        if ( item == time_table_21[0] ) {
                            box_y.push('30' + str)
                        }
                        if ( item == time_table_21[1] ) {
                            box_z.push(str)
                        }
                    }
                    if ( time_distance >= -(array.time_total) && time_distance <= 0 ) {
                        // 開催中に表示
                        if ( item == time_table_21[0] ) {
                            box_y.push(str)
                        }
                        if ( item == time_table_21[1] ) {
                            box_z.push(str)
                        }
                    }
                    return
                })
                box.push(box_y,box_z)
                return box
            })
            setBox(box)
        }
    }

    return (
        <div>
            {/* <div className={classes.root}>aaaaaaaaaaaaaaaa</div> */}
            <Card className={classes.big_card}>
                <CardContent>
                    <Typography className={classes.title} style={{fontSize: '1.4rem'}}>
                        鴨台祭
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        開催中のイベント
                    </Typography>
                    {/* <Typography className={classes.content} color="textSecondary" gutterBottom>
                        開催中のイベント
                    </Typography> */}
                    <div>
                        <div>
                            {air.map((index)=>{
                                if ( box[0] != undefined ) {
                                    let youtube_1 = box[0][0][0]
                                    let youtube_2 = box[0][0][1]

                                    let title_1_y = ""
                                    let subtitle_1_y = ""
                                    let waittime_1_y = ""
                                    let starttime_1_y = ""

                                    let title_2_y = ""
                                    let subtitle_2_y = ""
                                    let waittime_2_y = ""
                                    let starttime_2_y = ""
                                    if ( youtube_1 != undefined ) {
                                        title_1_y = youtube_1.split('+')[0]
                                        if ( title_1_y.indexOf('30') >= 0 ) {
                                            title_1_y = title_1_y.split('30')[1]
                                        }
                                        subtitle_1_y = youtube_1.split('+')[1].split('/')[0]
                                        waittime_1_y = youtube_1.split('+')[1].split('/')[1].split('&')[0]
                                        starttime_1_y = youtube_1.split('+')[1].split('/')[1].split('&')[1]
                                        if ( youtube_2 != undefined ) { 
                                            title_2_y = youtube_2.split('+')[0]
                                            if ( title_2_y.indexOf('30') >= 0 ) {
                                                title_2_y = title_2_y.split('30')[1]
                                            }
                                            subtitle_2_y = youtube_2.split('+')[1].split('/')[0]
                                            waittime_2_y = youtube_2.split('+')[1].split('/')[1].split('&')[0]
                                            starttime_2_y = youtube_2.split('+')[1].split('/')[1].split('&')[1]
                                        }
                                    }

                                    let zoom_1 = box[1][1][0]
                                    let zoom_2 = box[1][1][1]
                                    
                                    let title_1_z = ""
                                    let subtitle_1_z = ""
                                    let waittime_1_z = ""
                                    let starttime_1_z = ""

                                    let title_2_z = ""
                                    let subtitle_2_z = ""
                                    let waittime_2_z = ""
                                    let starttime_2_z = ""
                                    if ( zoom_1 != undefined ) {
                                        title_1_z = zoom_1.split('+')[0]
                                        if ( title_1_z.indexOf('30') >= 0 ) {
                                            title_1_z = title_1_z.split('30')[1]
                                        }
                                        subtitle_1_z = zoom_1.split('+')[1].split('/')[0]
                                        waittime_1_z = zoom_1.split('+')[1].split('/')[1].split('&')[0]
                                        starttime_1_z = zoom_1.split('+')[1].split('/')[1].split('&')[1]
                                        if ( zoom_2 != undefined ) {
                                            title_2_z = zoom_2.split('+')[0]
                                            if ( title_2_z.indexOf('30') >= 0 ) {
                                                title_2_z = title_2_z.split('30')[1]
                                            }
                                            subtitle_2_z = zoom_2.split('+')[1].split('/')[0]
                                            waittime_2_z = zoom_2.split('+')[1].split('/')[1].split('&')[0]
                                            starttime_2_z = zoom_2.split('+')[1].split('/')[1].split('&')[1]
                                        }
                                    }

                                    if ( title_1_y == "" && title_2_y == "" && title_1_z == "" &&  title_2_z == "" ) {
                                        setTimeout(()=>{
                                            setBom({display:"flex"})
                                        },10000)
                                        return (
                                            <div key={index}>
                                                <Card className={classes.incard}>
                                                    <CardContent>
                                                        現在イベント中ではないか<br />
                                                        システムのエラー中です。
                                                    </CardContent>
                                                </Card>
                                                <div className={`styles.box ${classes.box}`}>
                                                    <div className={styles.liquid}>
                                                        <div className={styles.a}></div>
                                                        <div className={styles.b}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                    return (
                                        <div key={index}>
                                            YouTube
                                            <Card className={classes.incard}>
                                                <CardContent>
                                                    <div className={classes.title}>{title_1_y}</div>
                                                    <div className={classes.subtitle}>{subtitle_1_y}</div>
                                                    <div className={classes.starttime}>{starttime_1_y}</div>
                                                    <div className={classes.waittime}>{waittime_1_y}</div>
                                                </CardContent>
                                            </Card>
                                            <Card className={classes.incard}>
                                                <CardContent>
                                                    <div className={classes.title}>{title_2_y}</div>
                                                    <div className={classes.subtitle}>{subtitle_2_y}</div>
                                                    <div className={classes.starttime}>{starttime_2_y}</div>
                                                    <div className={classes.waittime}>{waittime_2_y}</div>
                                                </CardContent>
                                            </Card>

                                            Zoom
                                            <Card className={classes.incard}>
                                                <CardContent>
                                                    <div className={classes.title}>{title_1_z}</div>
                                                    <div className={classes.subtitle}>{subtitle_1_z}</div>
                                                    <div className={classes.starttime}>{starttime_1_z}</div>
                                                    <div className={classes.waittime}>{waittime_1_z}</div>
                                                </CardContent>
                                            </Card>
                                            <Card className={classes.incard}>
                                                <CardContent>
                                                    <div className={classes.title}>{title_2_z}</div>
                                                    <div className={classes.subtitle}>{subtitle_2_z}</div>
                                                    <div className={classes.starttime}>{starttime_2_z}</div>
                                                    <div className={classes.waittime}>{waittime_2_z}</div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    )
                                } else { 
                                    return 
                                }
                            })}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Home