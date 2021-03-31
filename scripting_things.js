const url = `https://fortnitetracker.com/events/`

const fncs = function(season) {
  return `epicgames_S${season}_FNCS_`
}

const S15 = function(region, stage) {
  // stage = GrandFinals, RebootRound, SemiFinals, Qualifier${week}
  return `${stage}_${region}`
}
let x = 1
const S14Finals = function(region, stage) {
  if (stage === 'Grandfinals') {
    return `finals_${region}_PC_${stage}`
  } else {
    return `finals_${region}_PC_${stage}?window=S14_FNCS_Finals_${region}_PC_${stage}_Event1`
  }
}
const S14Week = function(region, stage) {
  // stage = qualifier1, qualifier2
  return `${stage}_${region}_PC`
}

const S13 = function(region, stage) {
  // stage = finals or qualifier(1,2,3,4)
  return `${region}_${stage}_PC`
}
const S12 = function(region, stage) {
  // stage = finals, week(1,2,3,4)
  return `${stage}_PC_${region}`
}
const S11 = function(region, stage) {
  return `${stage}_${region}`
}
const S10 = function(region) {
  `Finals_${region}`
}