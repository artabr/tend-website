'use client';
import * as Alert from '@/components/mui/Alert';
import * as AlertTitle from '@/components/mui/AlertTitle';
import * as AppBar from '@/components/mui/AppBar';
import * as Avatar from '@/components/mui/Avatar';
import * as AvatarGroup from '@/components/mui/AvatarGroup';
import * as Backdrop from '@/components/mui/Backdrop';
import * as Badge from '@/components/mui/Badge';
import * as BottomNavigation from '@/components/mui/BottomNavigation';
import * as BottomNavigationAction from '@/components/mui/BottomNavigationAction';
import * as Box from '@/components/mui/Box';
import * as Breadcrumbs from '@/components/mui/Breadcrumbs';
import * as Button from '@/components/mui/Button';
import * as Card from '@/components/mui/Card';
import * as CardActionArea from '@/components/mui/CardActionArea';
import * as CardActions from '@/components/mui/CardActions';
import * as CardContent from '@/components/mui/CardContent';
import * as CardHeader from '@/components/mui/CardHeader';
import * as CardMedia from '@/components/mui/CardMedia';
import * as Checkbox from '@/components/mui/Checkbox';
import * as Chip from '@/components/mui/Chip';
import * as CircularProgress from '@/components/mui/CircularProgress';
import * as ClickAwayListener from '@/components/mui/ClickAwayListener';
import * as Collapse from '@/components/mui/Collapse';
import * as Container from '@/components/mui/Container';
import * as Dialog from '@/components/mui/Dialog';
import * as DialogActions from '@/components/mui/DialogActions';
import * as DialogContent from '@/components/mui/DialogContent';
import * as DialogContentText from '@/components/mui/DialogContentText';
import * as DialogTitle from '@/components/mui/DialogTitle';
import * as Divider from '@/components/mui/Divider';
import * as Drawer from '@/components/mui/Drawer';
import * as Fab from '@/components/mui/Fab';
import * as Fade from '@/components/mui/Fade';
import * as FilledInput from '@/components/mui/FilledInput';
import * as FormControl from '@/components/mui/FormControl';
import * as FormControlLabel from '@/components/mui/FormControlLabel';
import * as FormGroup from '@/components/mui/FormGroup';
import * as FormHelperText from '@/components/mui/FormHelperText';
import * as FormLabel from '@/components/mui/FormLabel';
import * as Grid from '@/components/mui/Grid';
import * as ImageList from '@/components/mui/ImageList';
import * as ImageListItem from '@/components/mui/ImageListItem';
import * as ImageListItemBar from '@/components/mui/ImageListItemBar';
import * as Input from '@/components/mui/Input';
import * as InputAdornment from '@/components/mui/InputAdornment';
import * as InputLabel from '@/components/mui/InputLabel';
import * as LinearProgress from '@/components/mui/LinearProgress';
import * as Link from '@/components/mui/Link';
import * as List from '@/components/mui/List';
import * as ListItem from '@/components/mui/ListItem';
import * as ListItemAvatar from '@/components/mui/ListItemAvatar';
import * as ListItemButton from '@/components/mui/ListItemButton';
import * as ListItemIcon from '@/components/mui/ListItemIcon';
import * as ListItemSecondaryAction from '@/components/mui/ListItemSecondaryAction';
import * as ListItemText from '@/components/mui/ListItemText';
import * as ListSubheader from '@/components/mui/ListSubheader';
import * as Menu from '@/components/mui/Menu';
import * as MenuItem from '@/components/mui/MenuItem';
import * as MenuList from '@/components/mui/MenuList';
import * as Modal from '@/components/mui/Modal';
import * as OutlinedInput from '@/components/mui/OutlinedInput';
import * as Pagination from '@/components/mui/Pagination';
import * as PaginationItem from '@/components/mui/PaginationItem';
import * as Paper from '@/components/mui/Paper';
import * as Popover from '@/components/mui/Popover';
import * as Popper from '@/components/mui/Popper';
import * as Portal from '@/components/mui/Portal';
import * as Radio from '@/components/mui/Radio';
import * as RadioGroup from '@/components/mui/RadioGroup';
import * as Rating from '@/components/mui/Rating';
import * as Select from '@/components/mui/Select';
import * as Skeleton from '@/components/mui/Skeleton';
import * as Slide from '@/components/mui/Slide';
import * as Slider from '@/components/mui/Slider';
import * as Snackbar from '@/components/mui/Snackbar';
import * as SnackbarContent from '@/components/mui/SnackbarContent';
import * as SpeedDial from '@/components/mui/SpeedDial';
import * as SpeedDialAction from '@/components/mui/SpeedDialAction';
import * as SpeedDialIcon from '@/components/mui/SpeedDialIcon';
import * as Stack from '@/components/mui/Stack';
import * as Step from '@/components/mui/Step';
import * as StepButton from '@/components/mui/StepButton';
import * as StepConnector from '@/components/mui/StepConnector';
import * as StepContent from '@/components/mui/StepContent';
import * as StepIcon from '@/components/mui/StepIcon';
import * as StepLabel from '@/components/mui/StepLabel';
import * as Stepper from '@/components/mui/Stepper';
import * as SwipeableDrawer from '@/components/mui/SwipeableDrawer';
import * as Switch from '@/components/mui/Switch';
import * as Tab from '@/components/mui/Tab';
import * as TabScrollButton from '@/components/mui/TabScrollButton';
import * as Table from '@/components/mui/Table';
import * as TableBody from '@/components/mui/TableBody';
import * as TableCell from '@/components/mui/TableCell';
import * as TableContainer from '@/components/mui/TableContainer';
import * as TableFooter from '@/components/mui/TableFooter';
import * as TableHead from '@/components/mui/TableHead';
import * as TablePagination from '@/components/mui/TablePagination';
import * as TableRow from '@/components/mui/TableRow';
import * as TableSortLabel from '@/components/mui/TableSortLabel';
import * as Tabs from '@/components/mui/Tabs';
import * as TextField from '@/components/mui/TextField';
import * as TextareaAutosize from '@/components/mui/TextareaAutosize';
import * as ToggleButton from '@/components/mui/ToggleButton';
import * as ToggleButtonGroup from '@/components/mui/ToggleButtonGroup';
import * as Toolbar from '@/components/mui/Toolbar';
import * as Tooltip from '@/components/mui/Tooltip';
import * as Typography from '@/components/mui/Typography';
import * as Zoom from '@/components/mui/Zoom';
import { Builder, builder, withChildren } from '@builder.io/react';
import Counter from './components/Counter/Counter';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: 'Counter',
  inputs: [
    {
      name: 'initialCount',
      type: 'number',
    },
  ],
});

// Register all MUI components individually
Builder.registerComponent(withChildren(Card.default), Card.config);

Builder.registerComponent(withChildren(Button.default), Button.config);

Builder.registerComponent(withChildren(Avatar.default), Avatar.config);
Builder.registerComponent(withChildren(Badge.default), Badge.config);
Builder.registerComponent(
  withChildren(CardActions.default),
  CardActions.config,
);
Builder.registerComponent(
  withChildren(CardContent.default),
  CardContent.config,
);
Builder.registerComponent(CardHeader.default, CardHeader.config);
Builder.registerComponent(CardMedia.default, CardMedia.config);
Builder.registerComponent(withChildren(Chip.default), Chip.config);
Builder.registerComponent(withChildren(Zoom.default), Zoom.config);
Builder.registerComponent(withChildren(TableCell.default), TableCell.config);
Builder.registerComponent(withChildren(Typography.default), Typography.config);
Builder.registerComponent(withChildren(Tooltip.default), Tooltip.config);
Builder.registerComponent(withChildren(Toolbar.default), Toolbar.config);
Builder.registerComponent(
  withChildren(ToggleButtonGroup.default),
  ToggleButtonGroup.config,
);
Builder.registerComponent(
  withChildren(ToggleButton.default),
  ToggleButton.config,
);
Builder.registerComponent(
  withChildren(TextareaAutosize.default),
  TextareaAutosize.config,
);
Builder.registerComponent(withChildren(TextField.default), TextField.config);
Builder.registerComponent(withChildren(Tabs.default), Tabs.config);
Builder.registerComponent(
  withChildren(TableSortLabel.default),
  TableSortLabel.config,
);
Builder.registerComponent(withChildren(TableRow.default), TableRow.config);
Builder.registerComponent(
  withChildren(TablePagination.default),
  TablePagination.config,
);
Builder.registerComponent(withChildren(TableHead.default), TableHead.config);
Builder.registerComponent(
  withChildren(TableFooter.default),
  TableFooter.config,
);
Builder.registerComponent(
  withChildren(TableContainer.default),
  TableContainer.config,
);
Builder.registerComponent(withChildren(TableBody.default), TableBody.config);
Builder.registerComponent(withChildren(Table.default), Table.config);
Builder.registerComponent(
  withChildren(TabScrollButton.default),
  TabScrollButton.config,
);
Builder.registerComponent(withChildren(Tab.default), Tab.config);
Builder.registerComponent(withChildren(Switch.default), Switch.config);
Builder.registerComponent(
  withChildren(SwipeableDrawer.default),
  SwipeableDrawer.config,
);
Builder.registerComponent(withChildren(Stepper.default), Stepper.config);
Builder.registerComponent(withChildren(StepLabel.default), StepLabel.config);
Builder.registerComponent(withChildren(StepIcon.default), StepIcon.config);
Builder.registerComponent(
  withChildren(StepContent.default),
  StepContent.config,
);
Builder.registerComponent(
  withChildren(StepConnector.default),
  StepConnector.config,
);
Builder.registerComponent(withChildren(StepButton.default), StepButton.config);
Builder.registerComponent(withChildren(Step.default), Step.config);
Builder.registerComponent(withChildren(Stack.default), Stack.config);
Builder.registerComponent(
  withChildren(SpeedDialIcon.default),
  SpeedDialIcon.config,
);
Builder.registerComponent(
  withChildren(SpeedDialAction.default),
  SpeedDialAction.config,
);
Builder.registerComponent(withChildren(SpeedDial.default), SpeedDial.config);
Builder.registerComponent(
  withChildren(SnackbarContent.default),
  SnackbarContent.config,
);
Builder.registerComponent(withChildren(Snackbar.default), Snackbar.config);
Builder.registerComponent(withChildren(Slider.default), Slider.config);
Builder.registerComponent(withChildren(Slide.default), Slide.config);
Builder.registerComponent(withChildren(Skeleton.default), Skeleton.config);
Builder.registerComponent(withChildren(Select.default), Select.config);
Builder.registerComponent(withChildren(Rating.default), Rating.config);
Builder.registerComponent(withChildren(RadioGroup.default), RadioGroup.config);
Builder.registerComponent(withChildren(Radio.default), Radio.config);
Builder.registerComponent(withChildren(Portal.default), Portal.config);
Builder.registerComponent(withChildren(Popper.default), Popper.config);
Builder.registerComponent(withChildren(Popover.default), Popover.config);
Builder.registerComponent(withChildren(Paper.default), Paper.config);
Builder.registerComponent(
  withChildren(PaginationItem.default),
  PaginationItem.config,
);
Builder.registerComponent(withChildren(Pagination.default), Pagination.config);
Builder.registerComponent(
  withChildren(OutlinedInput.default),
  OutlinedInput.config,
);
Builder.registerComponent(withChildren(Modal.default), Modal.config);
Builder.registerComponent(withChildren(MenuList.default), MenuList.config);
Builder.registerComponent(withChildren(MenuItem.default), MenuItem.config);
Builder.registerComponent(withChildren(Menu.default), Menu.config);
Builder.registerComponent(
  withChildren(ListSubheader.default),
  ListSubheader.config,
);
Builder.registerComponent(
  withChildren(ListItemText.default),
  ListItemText.config,
);
Builder.registerComponent(
  withChildren(ListItemSecondaryAction.default),
  ListItemSecondaryAction.config,
);
Builder.registerComponent(
  withChildren(ListItemIcon.default),
  ListItemIcon.config,
);
Builder.registerComponent(
  withChildren(ListItemButton.default),
  ListItemButton.config,
);
Builder.registerComponent(
  withChildren(ListItemAvatar.default),
  ListItemAvatar.config,
);
Builder.registerComponent(withChildren(ListItem.default), ListItem.config);
Builder.registerComponent(withChildren(List.default), List.config);
Builder.registerComponent(withChildren(Link.default), Link.config);
Builder.registerComponent(
  withChildren(LinearProgress.default),
  LinearProgress.config,
);
Builder.registerComponent(withChildren(InputLabel.default), InputLabel.config);
Builder.registerComponent(
  withChildren(InputAdornment.default),
  InputAdornment.config,
);
Builder.registerComponent(withChildren(Input.default), Input.config);
Builder.registerComponent(
  withChildren(ImageListItemBar.default),
  ImageListItemBar.config,
);
Builder.registerComponent(
  withChildren(ImageListItem.default),
  ImageListItem.config,
);
Builder.registerComponent(withChildren(ImageList.default), ImageList.config);
Builder.registerComponent(withChildren(Grid.default), Grid.config);
Builder.registerComponent(withChildren(FormLabel.default), FormLabel.config);
Builder.registerComponent(
  withChildren(FormHelperText.default),
  FormHelperText.config,
);
Builder.registerComponent(withChildren(FormGroup.default), FormGroup.config);
Builder.registerComponent(
  withChildren(FormControlLabel.default),
  FormControlLabel.config,
);
Builder.registerComponent(
  withChildren(FormControl.default),
  FormControl.config,
);
Builder.registerComponent(
  withChildren(FilledInput.default),
  FilledInput.config,
);
Builder.registerComponent(withChildren(Fade.default), Fade.config);
Builder.registerComponent(withChildren(Fab.default), Fab.config);
Builder.registerComponent(withChildren(Drawer.default), Drawer.config);
Builder.registerComponent(withChildren(Divider.default), Divider.config);
Builder.registerComponent(
  withChildren(DialogTitle.default),
  DialogTitle.config,
);
Builder.registerComponent(
  withChildren(DialogContentText.default),
  DialogContentText.config,
);
Builder.registerComponent(
  withChildren(DialogContent.default),
  DialogContent.config,
);
Builder.registerComponent(
  withChildren(DialogActions.default),
  DialogActions.config,
);
Builder.registerComponent(withChildren(Dialog.default), Dialog.config);
Builder.registerComponent(withChildren(Container.default), Container.config);
Builder.registerComponent(withChildren(Collapse.default), Collapse.config);
Builder.registerComponent(
  withChildren(ClickAwayListener.default),
  ClickAwayListener.config,
);
Builder.registerComponent(
  withChildren(CircularProgress.default),
  CircularProgress.config,
);
Builder.registerComponent(withChildren(Checkbox.default), Checkbox.config);
Builder.registerComponent(
  withChildren(CardActionArea.default),
  CardActionArea.config,
);
Builder.registerComponent(
  withChildren(Breadcrumbs.default),
  Breadcrumbs.config,
);
Builder.registerComponent(withChildren(Box.default), Box.config);
Builder.registerComponent(
  withChildren(BottomNavigationAction.default),
  BottomNavigationAction.config,
);
Builder.registerComponent(withChildren(AppBar.default), AppBar.config);
Builder.registerComponent(
  withChildren(BottomNavigation.default),
  BottomNavigation.config,
);
Builder.registerComponent(withChildren(Backdrop.default), Backdrop.config);
Builder.registerComponent(
  withChildren(AvatarGroup.default),
  AvatarGroup.config,
);
Builder.registerComponent(withChildren(AlertTitle.default), AlertTitle.config);
Builder.registerComponent(withChildren(Alert.default), Alert.config);
