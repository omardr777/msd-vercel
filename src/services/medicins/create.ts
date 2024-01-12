import {useMutation} from '@tanstack/react-query'
import { medKey } from '.'
import { ICreateMedicinDrawer } from '@/types'
import { queryClient } from '@/components/providers/react-query'

const createMedicine= async (invoiceDTO:ICreateMedicinDrawer) =>{

    const res = await fetch('http://localhost:4000/meds',{
        method:'post',
        headers:{'Content-type': 'application/json'},
        body:JSON.stringify(invoiceDTO)
    })
    return await res.json()
}

export const useCreateMedicine = () => {

    return useMutation({mutationKey:[medKey],mutationFn:createMedicine,onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:[medKey]})
    }})
}
