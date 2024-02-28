export {};

// Catch clause variable type annotation must be any or unknown if specified

// EXAMPLE 1 - Use a type guard to solve the error

async function getNumber() {
  try {
    const result = await Promise.resolve(42);
    return result;
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      console.log(err.message);

      return;
    }

    console.log('Unexpected error', err);

    return;
  }
}

// ---------------------------------------------------

// // EXAMPLE 2 - Using a type assertion to solve the error

// async function getNumber() {
//   try {
//     const result = await Promise.resolve(42);
//     return result;
//   } catch (err) {
//     const typedError = err as Error;

//     console.log(typedError?.message);

//     return;
//   }
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Solve the error when using `axios`

// import axios from 'axios';

// async function getData() {
//   try {
//     // 👉️ ... fetch data here
//     return 'hello';
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log('error message: ', error.message);
//       // 👇️ error: AxiosError<any, any>
//       return error.message;
//     } else {
//       console.log('unexpected error: ', error);
//       return 'An unexpected error occurred';
//     }
//   }
// }
