import PresaleDetails from '../../../../../../../asvoria/src/views/presale-details'

export default function Page({ params }: { params: { id: string } }) {
  return <PresaleDetails id={params.id} />
}
