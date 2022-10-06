import {Component} from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component{
    render(){
        console.log(this.props.monsters);
        const { monsters } =  this.props;
        return (
            <div className='card-list'>
            {
                monsters.map((profile)=> {
                   return (
                   <Card profile={profile}/>
                )})
            }
            </div>
        );
    }
}

export default CardList;