import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from '../styles.module.scss';
import cls from 'classnames';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import SelectBox from '@pages/OurShop/components/SelectBox';

function Filter() {
    const {
        containerFilter,
        boxIcon,
        boxLeft,
        boxRight,
        selectBox,
        show,
        sort
    } = styles;

    const {showOoption, sortOption} = useContext(OurShopContext);
    return (
        <div className={containerFilter}>
            <div className={boxLeft}>
                {/* <select className={cls(selectBox, sort)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select> */}
                <SelectBox/>
                <div className={boxIcon}>
                    <TfiLayoutGrid4
                        style={{ fontSize: '23px', cursor: 'pointer' }}
                    />
                    <div
                        style={{
                            height: '20px',
                            width: '1px',
                            backgroundColor: '#e1e1e1'
                        }}
                    />
                    <CiCircleList
                        style={{
                            fontSize: '27px',
                            color: '#222',
                            cursor: 'pointer'
                        }}
                    />
                </div>
            </div>
            <div className={boxRight}>
                <div style={{ fontSize: '14px', color: '#555555' }}>Show</div>
                <select className={cls(selectBox, show)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;
