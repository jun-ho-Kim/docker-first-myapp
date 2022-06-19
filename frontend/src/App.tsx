import { gql, useMutation, useQuery } from '@apollo/client';
import { useForm } from "react-hook-form";
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './App.css';

const GET_DOGS = gql`
  query visitorBooks{
    visitorBooks {
      id
      text
    }
   }
  `;

const CREATE_DOGS = gql`
   mutation createVisitorBook($text: String) {
    createVisitorBook(text: $text) {
      id
      text
    }
   }
  `


function App() {
  let input: any;

  const { loading, data } = useQuery(GET_DOGS);


  const [createVisitorBook, { data: createDate, error }] = useMutation(CREATE_DOGS)

  return (
    <div className="App">
      <header className="App-header">
        {loading ? "Loading... ⏳" : (
          <>
            <form onSubmit={e => {
              e.preventDefault();
              createVisitorBook({ variables: { text: input.value } });
              input.value = '';
            }}>
              <fieldset>
                <legend>My First Docker App</legend>
                축하메세지 입력란: <input ref={node => {
                  input = node;
                }} type="text" name="text" placeholder="축하메세지를 입력해주세요"></input>
                <input type="submit" name="등록" />
              </fieldset>
            </form>
            <div>
              {data && data.visitorBooks.map((data: { id: number, text: string }) =>
                <h4 key={data.id}>{data.text}</h4>
              )}
            </div>
          </>
        )}

      </header>
    </div>
  );
}

export default App;
