import React, { useState } from 'react';
import { VocabUtils } from './VocabUtils';


//<button className='lang' onClick={() =>translatePlain()}><img src='' alt='langIcon' /></button>
export function Vocab() {
    const { vocabs, setVocabs,
        addVocab,
        deleteVocab,
        translatePlain} = VocabUtils();
    return (
        <div className="content-vocab">
            <table>
                <tbody>
                    <VocabHeader addVocab={addVocab} />
                    {vocabs.map(vocab => (
                        <VocabItem key={vocab.id} vocab={vocab} deleteVocab={deleteVocab} translatePlain={translatePlain}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function VocabHeader({ addVocab }) {
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');

    const onWordChange = (event) => {
        setWord(event.target.value);
    };
    const onMeaningChange = (event) => {
        setMeaning(event.target.value);
    };

    const submitVocab = (event) => {
        if (event.key !== 'Enter')
            return;
        addVocab(word, meaning);
        setWord('');
        setMeaning('');
    };

    return (
        <tr className='vocab-header'>
            <td>
                <input placeholder='word'
                    value={word}
                    onChange={onWordChange}
                    onKeyUp={submitVocab}
                    autoFocus />
            </td>
            <td>
                <input placeholder='meaning'
                    value={meaning}
                    onChange={onMeaningChange}
                    />
            </td>
        </tr>
    );

}

function VocabItem({ vocab, deleteVocab }) {
    //const [word, setWord] = useState(vocab.word);
    //const [meaning, setMeaning] = useState(vocab.meaning);

    const onWordChange = (event) => {
        //setWord(event.target.value);
    };
    const onMeaningChange = (event) => {
        //setMeaning(event.target.value);
    };

    return (
        <tr className='vocab-item'>
            <td>
                <input placeholder='word'
                    value={vocab.word}
                    onChange={onWordChange} />
            </td>
            <td>
                <input placeholder='meaning'
                    value={vocab.meaning}
                    onChange={onMeaningChange} />
            </td>
            <td><button>-</button></td>
        </tr>
    );

}
