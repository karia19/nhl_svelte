/** @type {import('./$types').LayoutServerLoad} */
import { redirect } from '@sveltejs/kit';


export async function load() {
    console.log("this is chec auth...")

    //throw redirect(303, "/")

    return {
      name: "masa"
    };
  }