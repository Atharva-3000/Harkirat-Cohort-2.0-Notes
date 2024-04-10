import RevenueCard from "../../components/RevenueCard";

export default {
  component: RevenueCard,
};

export const BigAmountVariant = {
  render: () => (
    <RevenueCard orderCount="123" title="Amount Pending" amount="92,312.20" />
  ),
};

export const SmallAmountVariant = {
    render: () => (
      <RevenueCard orderCount="123" title="Amount Pending" amount="92.20" />
    ),
  };
