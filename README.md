# react-form-row

Simple React components to reduce code duplication when implementing forms.

## Install

```bash
npm install @merlin4/react-form-row
```

## InputRow component

An `InputRow` is a stack of the following elements: `<label>`, `<input>`/`<textarea>`, and a `<div>` to display feedback.

_Below is an example text input row._

```jsx
import { useState } from 'react';
import { InputRow } from '@merlin4/react-form-row';

const [submitted, setSubmitted] = useState(false);
const [title, setTitle] = useState('');

const titleError = !title ? 'Title is required.' : '';

<InputRow
  label="Title"
  id="BlogPost-Title"
  name="title"
  type="text"
  value={title}
  onChange={(evt) => setTitle(title)}
  error={titleError}
  validated={submitted || title}
/>;
```

_Below is an example textarea row._

```jsx
import { useState } from 'react';
import { InputRow } from '@merlin4/react-form-row';

const [submitted, setSubmitted] = useState(false);
const [body, setBody] = useState('');

const bodyError = !body ? 'Body is required.' : '';

<InputRow
  label="Body"
  id="BlogPost-Body"
  name="body"
  type="textarea"
  cols="40"
  rows="7"
  value={body}
  onChange={(evt) => setBody(body)}
  error={bodyError}
  validated={submitted || body}
/>;
```

## SelectRow

A `SelectRow` is a stack of the following elements: `<label>`, `<select>`, and a `<div>` to display feedback.

_Below is an example dropdown with fixed options._

```jsx
import { useState } from 'react';
import { SelectRow } from '@merlin4/react-form-row';

const [submitted, setSubmitted] = useState(false);
const [genre, setGenre] = useState('');

const genreError = !genre ? 'Genre is required.' : '';

<SelectRow
  label="Genre"
  id="NewMovie-Genre"
  name="genre"
  value={genre}
  onChange={(evt) => setGenre(genre)}
  error={genreError}
  validated={submitted || genre}
>
  <option value="">Select Genre</option>
  <option value="Action">Action</option>
  <option value="Comedy">Comedy</option>
  <option value="Romance">Romance</option>
</SelectRow>;
```

_Below is an example dropdown with dynamic options._

```jsx
import { useState } from 'react';
import { map } from 'lodash';
import { SelectRow } from '@merlin4/react-form-row';

const [submitted, setSubmitted] = useState(false);
const [userId, setUserId] = useState('');
const [users, setUsers] = useState([]);

<SelectRow
  label="User"
  id="userId"
  name="userId"
  value={userId}
  onChange={(evt) => setUserId(userId)}
  error={!userId ? 'Please select a user.' : ''}
  validated={submitted || userId}
>
  <option key="" value="">
    Select User
  </option>
  {map(users, (user) => (
    <option key={user._id} value={user._id}>
      {user.fullName}
    </option>
  ))}
</SelectRow>;
```

## InputGroupRow

TODO

## SubmitRow

An `SubmitRow` is a combination of the following elements: `<button>`, spinner, and and success/error message. It helps support asynchronous operations by updating its from the provided promise.

_Below is an example form submit row._

```jsx
import { useState } from 'react';
import axios from 'axios';
import { SubmitRow } from '@merlin4/react-form-row';

const [submitted, setSubmitted] = useState(false);

function onSubmit(evt) {
  // FIXME
  setSubmitted(true);
  return axios(...);
}

<SubmitRow 
  className="btn btn-primary"
  type="submit"
  disabled={!canSubmit}
  onClick={onSubmit}
/>
```