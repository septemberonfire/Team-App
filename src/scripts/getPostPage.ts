import { database } from './getFirebaseDB'
import getPostCards from './getPostCards'

export default async function getPostPage() {
const postId = `/${window.location.search.split('?')[1]}`

const cardData = await getPostCards(database, postId)
const mainContent = document.querySelector('.mainContent') as HTMLElement
let postPageHTMLToString = '' as string

console.log(cardData)

const postPageHTML = `<section class="headline">
<h1 class="headline_title">
  ${cardData.title}
</h1>
<div class="headline_autor">
  <img
    src="${cardData.autorImg}"
    alt=""
    class="headline_autorAvatar"
  />
  <p class="headline_autorName">${cardData.autorName}</p>
  <p class="headline_autorDate">${cardData.postDate}</p>
</div>
</section>

<section class="article">
<picture class="article_img">
  <source
    type="image/png"
    media="(min-width: 744px)"
    srcset="/src/images/office.png"
  />
  <img
  src="./src/images/office_small.png"
  alt="office"
    class="article_img-small"
  />
</picture>

<span class="article_content">
  ${cardData.caption} Administrators of Team Cloud organizations can export public data from
  their organization via the organization settings menu. The exports
  include all the data that appears in public streams, and can be used to
  migrate from Team Cloud to self-hosting Team. Note that exporting
  private data is a separate process that requires contacting Team
  Support. <br /><br />

  Due to a bug in the public export code, exports of public data contained
  all uploaded files, even those from private messages and private
  streams. This may have allowed organization owners or administrators to
  extract uploaded files that they were not otherwise allowed to access.
  The content of non-public messages was never included in public exports.
  <br /><br />

  This bug has existed since the public export feature was implemented in
  August 2019. We have deleted all existing Team Cloud exports from our
  servers, and will be making changes to auto-expire all exports after 7
  days in the future. This bug was fixed for self-hosted users in the Team
  Server 5.4 release. <br /><br />

  We have notified by email all administrators and users in
  non-deactivated Team Cloud organizations who may have been impacted by
  this bug. As many organizations have never exported their data, most
  Team Cloud users were not affected. <br /><br />

  We would like to thank Antoine Benoist for bringing this issue to our
  attention.
</span>
</section>

<section class="autor">
<img src="${cardData.autorImg}" alt="autor" class="autor_avatar" />
<div class="autor_info">
  <p class="autor_writtenBy">WRITTEN BY</p>
  <p class="autor_name">${cardData.autorName}</p>
  <p class="autor_job">
    COO at Team. Author of the upcoming book on Team Management and
    Leadership.
  </p>
</div>
</section>`

postPageHTMLToString += `${postPageHTML}`

mainContent.innerHTML = postPageHTMLToString

}
