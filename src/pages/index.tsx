import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { styled } from '@mui/material/styles';
import { Paper, Grid, MenuItem, Select, SelectChangeEvent, FormControl } from '@mui/material';
import data from '../../data.json';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#171525',
  padding: theme.spacing(1),
  height: 120,
  color: '#fff'
}));


export default function Home() {
  const [tech, setTech] = useState('Blockchain');
  const topList = [
    { title: 'BTC', price: '$30,213', ratio: '+1.37%' },
    { title: 'ETH', price: '$10,213', ratio: '+2.17%' },
    { title: 'LUNA', price: '$1,213', ratio: '+1.31%' },
    { title: 'GALA', price: '$2,213', ratio: '+0.31%' },
    { title: 'BNB', price: '$301', ratio: '+2.37%' }
  ]

  const { mainTitle, mainText, mainData, mainLocation, mainCategory } = data;

  const handleChange = (event: SelectChangeEvent) => {
    setTech(event.target.value as string);
  };

  return (
    <>
      <Head>
        <title>Luna Times</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid className={styles.header} container spacing={3}>
        <Grid item xs={3}>
          <Item elevation={0}>
            <Image
              src={'/logo.png'}
              alt={'logo'}
              width={120}
              height={100}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item elevation={0} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {
              topList.map((value, index) => (
                <div key={index} className={`${styles.centerItemStyle} ${index !== 0 && 'border-white border-l-[1px]'}`}>
                  <p>{value.title}</p>
                  <p>{value.price}</p>
                  <p>{value.ratio}</p>
                </div>
              ))
            }
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item elevation={0} style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <FormControl sx={{ m: 1, width: 220, }}>
              <Select
                labelId="simple-select-label"
                id="simple-select"
                value={tech}
                onChange={handleChange}
                autoWidth
                className={styles.selectStyle}
              >
                <MenuItem className={styles.menuItemStyle} value={'Blockchain'}>Blockchain</MenuItem>
                <MenuItem className={styles.menuItemStyle} value={'HyperLedger'}>Hyper Ledger</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Grid>
      </Grid>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className='flex justify-between'>
            <div className='flex flex-col justify-center pl-16 pr-10' style={{ width: '50%' }}>
              <div className='flex justify-between' style={{ width: '55%', alignItems: 'center' }}>
                <div className='px-8 py-4 rounded-full' style={{ backgroundColor: '#F3F3F3' }}>
                  <span className='text-xl font-semibold'>{mainCategory}</span>
                </div>
                <div className='flex'>
                  <img src={'/location.png'} style={{ width: 22 }} />
                  <span className='pl-2'>{mainLocation}</span>
                </div>
                <div className='flex'>
                  <img src={'/calender.png'} style={{ width: 22 }} />
                  <span className='pl-2'>{mainData}</span>
                </div>
              </div>
              <div>
                <h1 className='text-7xl font-extrabold'>{mainTitle}</h1>
              </div>
              <div>
                <p>{mainText}</p>
              </div>
            </div>
            <img src={'/storyImage.png'} style={{ width: '50%' }} />
          </div>
        </div>
      </main>
    </>
  )
}
