import Image from 'next/image';
import zapier from '../public/images/zapier.png';
import pipedrive from '../public/images/pipedrive.png';
import cibbank from '../public/images/cibbank.png';
import seven from '../public/images/7.png' 
import burntoast from '../public/images/burntoast.png' 
import pandadoc from '../public/images/pandadoc.png' 
import moz from '../public/images/moz.png' 

export default function BrandsSlider(){
    return(
        <div className='mt-[38px]'>
            <div className='slider' data-reverse='true' style={{
                '--width': '200px',
                '--height': '100px',
                '--quantity': '14'} as React.CSSProperties}>
                <div className='list'>
                    <div className='item' style={{'--position': 1} as React.CSSProperties}><Image src={zapier} alt=''  className='w-[100px] h-auto'/></div>
                    <div className='item' style={{'--position': 2} as React.CSSProperties}><Image src={pipedrive} alt=''  className='w-[100px] h-auto'/></div>
                    <div className='item' style={{'--position': 3} as React.CSSProperties}><Image src={cibbank} alt=''  className='w-[100px] h-auto'/></div>
                    <div className='item' style={{'--position': 4} as React.CSSProperties}><Image src={seven} alt=''  className='w-[100px] h-auto'/></div>
                    <div className='item' style={{'--position': 5} as React.CSSProperties}><Image src={burntoast} alt=''  className='w-[100px] h-auto'/></div>
                    <div className='item' style={{'--position': 6} as React.CSSProperties}><Image src={pandadoc} alt=''  className='w-[100px] h-auto'/></div>
                    <div className='item' style={{'--position': 7} as React.CSSProperties}><Image src={moz} alt=''  className='w-[100px] h-auto'/></div>

                    <div className='item' style={{'--position': 8} as React.CSSProperties}><Image src={zapier} alt=''  className='w-[100px] h-auto'/></div>
                    <div className='item' style={{'--position': 9} as React.CSSProperties}><Image src={pipedrive} alt=''  className='w-[100px] h-auto'/></div>
                    <div className='item' style={{'--position': 10} as React.CSSProperties}><Image src={cibbank} alt=''  className='w-[100px] h-auto'/></div>
                    <div className='item' style={{'--position': 11} as React.CSSProperties}><Image src={seven} alt=''  className='w-[100px] h-auto'/></div>
                    <div className='item' style={{'--position': 12} as React.CSSProperties}><Image src={burntoast} alt=''  className='w-[100px] h-auto'/></div>
                    <div className='item' style={{'--position': 13} as React.CSSProperties}><Image src={pandadoc} alt=''  className='w-[100px] h-auto'/></div>
                    <div className='item' style={{'--position': 14} as React.CSSProperties}><Image src={moz} alt=''  className='w-[100px] h-auto'/></div>
                </div>
            </div>
        </div>
    )
}