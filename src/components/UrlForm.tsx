import React, { ChangeEvent, useState } from 'react';
import { Button, Columns, Form } from 'react-bulma-components';

const { Field, Control, Input } = Form;

export const UrlForm: React.FC = () => {
  const [url, setUrl] = useState('');

  return (
    <Columns>
      <Columns.Column size={9}>
        <Field>
          <Control>
            <Input placeholder={'https://www.example.com'} value={url} onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)} />
          </Control>
        </Field>
      </Columns.Column>
      <Columns.Column size={3}>
        <Button fullwidth color={'success'}>
          Add Link
        </Button>
      </Columns.Column>
    </Columns>
  );
};
