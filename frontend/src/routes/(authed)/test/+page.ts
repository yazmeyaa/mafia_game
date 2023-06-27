export const load = async ({parent}) => {
    const {user} = await parent()
    console.log('TEST PAGE: ', user)
    
}