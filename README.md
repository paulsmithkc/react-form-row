# react-form-row

Simple React components to reduce code duplication when implementing forms.

Base classes pre-applied for Bootstrap 5 support.

## Install

```bash
npm install @merlin4/react-form-row
```

## InputRow component

`InputRow` is a stack of the following elements: `<label>`, `<input>`/`<textarea>`, and a `<div>` to display feedback.

_Below is an example text input row._

```jsx
// imports
import { useState } from 'react';
import { InputRow } from '@merlin4/react-form-row';

// hooks
const [submitted, setSubmitted] = useState(false);
const [title, setTitle] = useState('');

// local vars
const titleError = !title ? 'Title is required.' : '';

// render
<InputRow
  label="Title"
  id="BlogPost-Title"
  name="title"
  type="text"
  value={title}
  onChange={(evt) => setTitle(evt.currentTarget.value)}
  error={titleError}
  validated={submitted || title}
/>
```

_Below is an example textarea row._

```jsx
// imports
import { useState } from 'react';
import { InputRow } from '@merlin4/react-form-row';

// hooks
const [submitted, setSubmitted] = useState(false);
const [body, setBody] = useState('');

// local vars
const bodyError = !body ? 'Body is required.' : '';

// render
<InputRow
  label="Body"
  id="BlogPost-Body"
  name="body"
  type="textarea"
  cols="40"
  rows="7"
  value={body}
  onChange={(evt) => setBody(evt.currentTarget.value)}
  error={bodyError}
  validated={submitted || body}
/>
```

## SelectRow

`SelectRow` is a stack of the following elements: `<label>`, `<select>`, and a `<div>` to display feedback.

_Below is an example dropdown with fixed options._

```jsx
// imports
import { useState } from 'react';
import { SelectRow } from '@merlin4/react-form-row';

// hooks
const [submitted, setSubmitted] = useState(false);
const [genre, setGenre] = useState('');

// local vars
const genreError = !genre ? 'Genre is required.' : '';

// render
<SelectRow
  label="Genre"
  id="NewMovie-Genre"
  name="genre"
  value={genre}
  onChange={(evt) => setGenre(evt.currentTarget.value)}
  error={genreError}
  validated={submitted || genre}
>
  <option value="">Select Genre</option>
  <option value="Action">Action</option>
  <option value="Comedy">Comedy</option>
  <option value="Romance">Romance</option>
</SelectRow>
```

_Below is an example dropdown with dynamic options._

```jsx
// imports
import { useState } from 'react';
import { map } from 'lodash';
import { SelectRow } from '@merlin4/react-form-row';

// hooks
const [submitted, setSubmitted] = useState(false);
const [userId, setUserId] = useState('');
const [users, setUsers] = useState([]);

// render
<SelectRow
  label="User"
  id="userId"
  name="userId"
  value={userId}
  onChange={(evt) => setUserId(evt.currentTarget.value)}
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
</SelectRow>
```

## InputGroupRow

`InputGroupRow` is a simple wrapper for a Bootstrap Input Group.

_Below is an example search bar._

```jsx
// imports
import { useState } from 'react';
import { InputGroupRow } from '@merlin4/react-form-row';

// hooks
const [query, setQuery] = useState('');

// render
<InputGroupRow>
  <input
    className="form-control"
    aria-label="Title"
    id="query"
    name="query"
    type="search"
    value={query}
    onChange={(evt) => setQuery(evt.currentTarget.value)}
  />
  <button className="btn btn-outline-primary" type="submit" onClick={onSearch}>
    Search
  </button>
</InputGroupRow>
```

## SubmitRow

`SubmitRow` is a combination of the following elements: `<button>`, spinner, and a success/error message. It helps support asynchronous operations by updating its from the provided promise.

_Below is an example form submit row._

```jsx
// imports
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SubmitRow } from '@merlin4/react-form-row';
import axios from 'axios';

// hooks
const [submitted, setSubmitted] = useState(false);
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const navigate = useNavigate();

// local vars
const canSubmit = auth?.payload?.permissions?.postBlog;

// handlers
async function onSubmit(evt) {
  setSubmitted(true);
  const res = await axios('http://localhost:5000/api/post/new', {
    method: 'put',
    data: { title, body },
  });
  toast.success(res.data.message);
  navigate(`/post/${res.data.postId}`);
  return res;
}

// render
<SubmitRow
  className="btn btn-primary"
  type="submit"
  disabled={!canSubmit}
  onClick={onSubmit}
/>
```
