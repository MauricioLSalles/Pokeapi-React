import { type ReactElement } from 'react'
import Button from '../../Atoms/Button/Button'
import './Game.css'

export default function Game(): ReactElement {
    return (
        <div className='game'>
            <img className='guessPokemon' src='/placeholder/guessPlaceholder.png' />
            <div className='gameButtons'>
                <Button type='primary' text='Pikachu' />
                <Button type='primary' text='Pikachu' />
                <Button type='primary' text='Pikachu' />
                <Button type='primary' text='Pikachu' />
            </div>
        </ div>
    )
}
